import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

function auth(props) {
    return (
        <div className="text-center space-x-5 flex justify-center items-center">
           <div><LoginLink>Sign in</LoginLink></div>
            <div><RegisterLink>Sign up</RegisterLink></div>
        </div>
    );
}

export default auth;