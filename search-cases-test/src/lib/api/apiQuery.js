import { useQuery } from "@tanstack/react-query";
import { api } from "./api.js";
import { MethodTypeEnum } from "../enums/methodType.js";
import { ModulesEnum } from "../enums/modules";

export const useCasesList = () =>
  useQuery(["cases-data"], () =>
    api.post("", {
      module: ModulesEnum.Cases,
      controllerName: "Cases",
      serviceName: "GetCases",
      methodType: MethodTypeEnum.Post,
    })
  );

export const useStakeoldersList = () =>
  useQuery(["stakeolders-data"], () =>
    api.post("", {
      module: ModulesEnum.Stakeolders,
      controllerName: "Stakeolders",
      serviceName: "GetStakeolders",
      methodType: MethodTypeEnum.Post,
    })
  );
