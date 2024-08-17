import Image from "next/image";

const SocialMedia = () => {
    return (
      <ul className="flex justify-start gap-3 mt-48">
        <a href="https://github.com/Rabbok" target="_blank">
          <img className="h-7 w-7" src="/img/317712_code_repository_github_repository_resource_icon_negate.png" alt=""/>
        </a>
        <a href="https://www.upwork.com/freelancers/~01eba3de17dc7b1e4a?mp_source=share" target="_blank">
          <img className="h-7 w-7" src="/img/1929178_upwork_icon_negate.png" alt="" />
        </a>
        <a href="https://www.linkedin.com/in/maksym-novikov-dev/" target="_blank">
          <img className="h-7 w-7" src="/img/104493_linkedin_icon_negate.png" alt="" />
        </a>
        {/* <a href="mailto:rabbokku@gmail.com" target="_blank">
          <img className="h-7 w-7" src="/img/4550857_email_gmail_mail_sending_yahoo_icon_negate.png" alt="" />
        </a> */}
      </ul>
    );
  }
  
  export default SocialMedia;
  