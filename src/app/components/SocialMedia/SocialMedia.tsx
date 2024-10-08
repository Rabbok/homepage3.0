const SocialMedia = () => {
  return (
    <ul className="flex justify-start gap-3 mt-8 lg:mt-48">
      <a href="https://github.com/Rabbok" target="_blank">
        <img
          className="h-5 w-5 md:h-7 md:w-7 transform transition-transform duration-300 hover:scale-125"
          src="/img/317712_code_repository_github_repository_resource_icon_negate.png"
          alt=""
        />
      </a>
      <a href="https://www.upwork.com/freelancers/~01eba3de17dc7b1e4a?mp_source=share" target="_blank">
        <img
          className="h-5 w-5 md:h-7 md:w-7 transform transition-transform duration-300 hover:scale-125"
          src="/img/1929178_upwork_icon_negate.png"
          alt=""
        />
      </a>
      <a href="https://www.linkedin.com/in/maksym-novikov-dev/" target="_blank">
        <img
          className="h-5 w-5 md:h-7 md:w-7 transform transition-transform duration-300 hover:scale-125"
          src="/img/104493_linkedin_icon_negate.png"
          alt=""
        />
      </a>
    </ul>
  );
}

export default SocialMedia;
