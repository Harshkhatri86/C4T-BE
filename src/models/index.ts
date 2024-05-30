import Category from "./Category";
import Service from "./Service";
import PriceOption from "./PriceOption";

Category.associate({ Service });
Service.associate({ Category });
Service.associate({ PriceOption });
PriceOption.associate({ Service });

export { Category, Service, PriceOption };
