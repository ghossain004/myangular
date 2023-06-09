import { Signup } from "./signup.model";

export interface Message {
    messageId :number;
    userId :number;
    messageBody :string;
    firstName :string;
    lastName :string;
    createDate: string;
    createTime: string;
    user : Signup;
}