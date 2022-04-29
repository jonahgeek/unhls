import { Button } from '@/components/Elements';
import { Form, FormDrawer, InputField } from '@/components/Form';
import { Authorization, ROLES } from '@/lib/authorization';
import { PencilIcon } from '@heroicons/react/solid';
import PropTypes from 'prop-types';
import * as z from 'zod';

import { usePatient } from '../api/getPatient';
import { useUpdatePatient } from '../api/updatePatient';

const schema = z.object({
  facilityName: z.string().min(1, 'Required'),
  patientName: z.string().min(1, 'Required'),
  contact: z.string().min(1, 'Required'),
  age: z.string().min(1, 'Required'),
  sex: z.string().min(1, 'Required'),
  village: z.string().min(1, 'Required'),
  district: z.string().min(1, 'Required'),
  region: z.string().min(1, 'Required'),
  nextOfKin: z.string().min(1, 'Required'),
  contactNextOfKin: z.string().min(1, 'Required'),
});

export const UpdatePatient = ({ patientId }) => {
  const patientQuery = usePatient({ patientId });
  const updatePatientMutation = useUpdatePatient();

  return (
    <Authorization allowedRoles={[ROLES.ADMIN]}>
      <FormDrawer
        size="sm"
        isDone={updatePatientMutation.isSuccess}
        triggerButton={
          <Button startIcon={<PencilIcon className="h-4 w-4" />} size="sm">
            Update Patient
          </Button>
        }
        title="Update Patient"
        submitButton={
          <Button
            form="update-discussion"
            type="submit"
            size="sm"
            isLoading={updatePatientMutation.isLoading}
          >
            Submit
          </Button>
        }
      >
        <Form
          id="update-discussion"
          onSubmit={async (values) => {
            await updatePatientMutation.mutateAsync({ data: values, patientId });
          }}
          options={{
            defaultValues: {
              patientName: patientQuery.data?.patientName,
              facilityName: patientQuery.data?.facilityName,
              contact: patientQuery.data?.contact,
              age: patientQuery.data?.age,
              sex: patientQuery.data?.sex,
              village: patientQuery.data?.village,
              district: patientQuery.data?.district,
              region: patientQuery.data?.region,
              nextOfKin: patientQuery.data?.nextOfKin,
              contactNextOfKin: patientQuery.data?.contactNextOfKin,
            },
          }}
          schema={schema}
        >
          {({ register, formState }) => (
            <>
              <InputField
                label="Patient Name"
                error={formState.errors['patientName']}
                registration={register('patientName')}
              />
              <InputField
                label="Facility Name"
                error={formState.errors['facilityName']}
                registration={register('facilityName')}
              />
              <InputField
                label="Contact"
                error={formState.errors['contact']}
                registration={register('contact')}
              />
              <InputField
                label="Age"
                error={formState.errors['age']}
                registration={register('age')}
              />
              <InputField
                label="Sex"
                error={formState.errors['sex']}
                registration={register('sex')}
              />
              <InputField
                label="Village"
                error={formState.errors['village']}
                registration={register('village')}
              />
              <InputField
                label="District"
                error={formState.errors['district']}
                registration={register('district')}
              />
              <InputField
                label="Region"
                error={formState.errors['region']}
                registration={register('region')}
              />
              <InputField
                label="Next of Kin"
                error={formState.errors['nextOfKin']}
                registration={register('nextOfKin')}
              />
              <InputField
                label="Contact (Next of Kin)"
                error={formState.errors['contactNextOfKin']}
                registration={register('contactNextOfKin')}
              />
            </>
          )}
        </Form>
      </FormDrawer>
    </Authorization>
  );
};

UpdatePatient.propTypes = {
  patientId: PropTypes.string.isRequired,
};
