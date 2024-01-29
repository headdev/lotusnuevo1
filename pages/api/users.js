import { amplify, WithSSr}  from "aws-amplify";
import awsconfig from "../../src/configuracion";

amplify.configure(awsconfig);

export default async function handler(req, res) {
    const auth = WithSSR(req);
    const user = await auth.currentAuthenticatedUser();
    