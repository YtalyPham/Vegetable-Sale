import { useQuery } from "@tanstack/react-query";
import { getCategoriesAPI } from "./request";
import { optionsUseQuery} from "../../utils/common";
export const useGetCategoriesUS = (option) => {
    return useQuery({
        queryKey: ['GetCategoriesAPI'],
        queryFn: getCategoriesAPI(),
        optionsUseQuery,
        ...option,
       
    });
};