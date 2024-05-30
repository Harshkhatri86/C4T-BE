import Category from "./Category";
import Service from "./Service";
import PriceOption from "./PriceOption";
import User from "./User";

Category.associate({ Service });
Service.associate({ Category });
Service.associate({ PriceOption });
PriceOption.associate({ Service });

export { Category, Service, PriceOption  , User};
