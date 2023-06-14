import * as yup from 'yup';

export const invitationValidationSchema = yup.object().shape({
  inviter_id: yup.string().nullable().required(),
  invitee_id: yup.string().nullable().required(),
  employer_id: yup.string().nullable().required(),
});
