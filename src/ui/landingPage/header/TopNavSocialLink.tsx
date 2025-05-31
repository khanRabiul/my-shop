import SocialMediaLink from './SocialMediaLink';

const TopNavSocialLink = () => {


  return (
    <section className="bg-[#1B6392] py-1.5 hidden md:block">
      <div className="container">
        <div
          className="md:flex md:flex-col lg:flex-row lg:items-center lg:justify-between ">
          <div>
            <p className="text-white text-sm">Welcome to My Shop Multivendor Ecommerce website</p>
          </div>

          <div>
            <SocialMediaLink />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopNavSocialLink;