import { UserInterface } from 'interfaces/user';
import { EmployerInterface } from 'interfaces/employer';
import { GetQueryInterface } from 'interfaces';

export interface InvitationInterface {
  id?: string;
  inviter_id: string;
  invitee_id: string;
  employer_id: string;
  created_at?: any;
  updated_at?: any;

  user_invitation_inviter_idTouser?: UserInterface;
  user_invitation_invitee_idTouser?: UserInterface;
  employer?: EmployerInterface;
  _count?: {};
}

export interface InvitationGetQueryInterface extends GetQueryInterface {
  id?: string;
  inviter_id?: string;
  invitee_id?: string;
  employer_id?: string;
}
