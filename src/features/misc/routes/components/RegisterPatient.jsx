import { Button } from '@/components/Elements';
import { Form, FormDrawer, InputField } from '@/components/Form';
import { Authorization, ROLES } from '@/lib/authorization';
import { PlusIcon } from '@heroicons/react/outline';
import * as z from 'zod';

import { useRegisterPatient } from '../api/registerPatient';

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

export const RegisterPatient = () => {
  const createPatientMutation = useRegisterPatient();

  return (
    <Authorization allowedRoles={[ROLES.ADMIN]}>
      <FormDrawer
        size="sm"
        isDone={createPatientMutation.isSuccess}
        triggerButton={
          <Button size="sm" startIcon={<PlusIcon className="h-4 w-4" />}>
            Register Patient
          </Button>
        }
        title="Register Patient"
        submitButton={
          <Button
            form="create-discussion"
            type="submit"
            size="sm"
            isLoading={createPatientMutation.isLoading}
          >
            Submit
          </Button>
        }
      >
        <Form
          id="create-discussion"
          onSubmit={async (values) => {
            await createPatientMutation.mutateAsync({ data: values });
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
