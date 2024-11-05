'use client';

import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery } from '@tanstack/react-query';

// Libs + stores
import { updateProfileSchema, getUserId, updateUser } from '@/libs';
import { useUserStore } from '@/stores';

// Constants
import {
  FONT_SIZE,
  FONT_WEIGHT,
  GENDER,
  MESSAGE_API,
  QUERY,
  STATUS,
  TYPE
} from '@/constants';

// Components
import {
  Button,
  Input,
  Typography,
  RadioButton,
  InputController,
  ToastMessage
} from '@/ui/components';

// Interfaces
import { IUser } from '@/interfaces';

interface ProfileFormProps {
  user: IUser;
}
const ProfileForm = ({ user }: ProfileFormProps) => {
  const [toast, setToast] = useState<{
    status: STATUS;
    message: string;
  } | null>(null);

  // Config form data
  const {
    control,
    handleSubmit,
    setValue,
    formState: { isSubmitting }
  } = useForm({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      firstName: '',
      street: '',
      address: '',
      phone: '',
      gender: ''
    }
  });
  const { setUser } = useUserStore();

  // Fetch user with current user id
  const { data } = useQuery<IUser>({
    queryKey: [QUERY.USER],
    queryFn: () => getUserId(user!.id),
    enabled: !!user
  });

  useEffect(() => {
    if (data) {
      setValue('firstName', data.firstName || '');
      setValue('street', data.street || '');
      setValue('address', data.address || '');
      setValue('phone', data.phone || '');
      setValue('gender', data.gender || '');
    }
  }, [setValue, data]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue('phone', value);
  };

  const onSubmit = async (data: {
    firstName: string;
    street: string;
    address: string;
    phone: string;
    gender: string;
  }) => {
    if (!user) {
      return;
    }

    const updatedUser: IUser = {
      ...user,
      firstName: data.firstName,
      street: data.street,
      address: data.address,
      phone: data.phone,
      gender: data.gender,
      updated_at: new Date().toISOString()
    };

    const response = await await updateUser(user.id, updatedUser);

    if (response.data) {
      setUser(updatedUser);
      setToast({
        status: STATUS.SUCCESS,
        message: MESSAGE_API.UPDATE_PROFILE_SUCCESS
      });
    }
  };

  if (!user) return null;

  return (
    <>
      <form className="container mb-28" onSubmit={handleSubmit(onSubmit)}>
        <div className="md:flex justify-between items-center gap-10 mb-4">
          <div className="w-full">
            <div className="mb-4">
              <InputController
                name="firstName"
                control={control}
                variant={TYPE.SECOND}
                label="Name"
                placeholder="Enter your first name"
              />
            </div>
            <div className="mb-4">
              <InputController
                name="street"
                control={control}
                variant={TYPE.SECOND}
                label="Street"
                placeholder="Enter your street"
              />
            </div>
            <div className="mb-4">
              <InputController
                name="address"
                control={control}
                label="Address"
                variant={TYPE.THIRD}
                rows={5}
                placeholder="Enter your address"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="mb-4">
              <Controller
                name="phone"
                control={control}
                render={({ field: { name, value }, formState: { errors } }) => (
                  <Input
                    name={name}
                    label="No.Phone"
                    variant={TYPE.SECOND}
                    placeholder="Enter your phone number"
                    value={value}
                    onChange={handlePhoneChange}
                    message={errors.phone?.message}
                  />
                )}
              />
            </div>
            <div className="mt-12">
              <Typography
                size={FONT_SIZE.X_SMALL}
                fontWeight={FONT_WEIGHT.BOLD}
                className="mb-4"
              >
                Gender
              </Typography>
              <div className="flex gap-4">
                <Controller
                  name="gender"
                  control={control}
                  render={({ field: { name, onChange, value } }) => (
                    <>
                      <RadioButton
                        id="male"
                        value={GENDER.MALE}
                        label="Male"
                        name={name}
                        checked={value === GENDER.MALE}
                        onChange={onChange}
                      />
                      <RadioButton
                        id="female"
                        value={GENDER.FEMALE}
                        label="Female"
                        name={name}
                        checked={value === GENDER.FEMALE}
                        onChange={onChange}
                      />
                      <RadioButton
                        id="other"
                        value={GENDER.OTHER}
                        label="Other"
                        name={name}
                        checked={value === GENDER.OTHER}
                        onChange={onChange}
                      />
                    </>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        <Button type="submit" disabled={isSubmitting}>
          Update
        </Button>
      </form>
      {toast && <ToastMessage status={toast.status} message={toast.message} />}
    </>
  );
};

export default ProfileForm;
