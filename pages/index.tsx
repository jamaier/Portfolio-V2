import { services } from "../data";
import ServiceCard from "../components/ServiceCard";

const Index = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 font-medium">
        About Me Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Maiores labore sint quaerat qui quibusdam deserunt consequuntur
      </h5>
      <div
        className="flex-grow p-2 mt-5 bg-gray-400 dark:bg-black-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-2 text-xl font-bold tracking-wide">What I got</h6>
        <div
          className="flex-grow p-2 mt-2 bg-gray-400 dark:bg-black-100 md:col-2'
            style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}"
        >
          {services.map((service) => (
            <div className="col-span-2 p-2 my-2 bg-gray-200 rounded-lg dark:bg-black-200 md:col-span-1">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
