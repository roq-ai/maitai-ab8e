import * as yup from 'yup';
import { invitationValidationSchema } from 'validationSchema/invitations';

export const employerValidationSchema = yup.object().shape({
  description: yup.string(),
  image: yup.string(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
  invitation: yup.array().of(invitationValidationSchema),
});
