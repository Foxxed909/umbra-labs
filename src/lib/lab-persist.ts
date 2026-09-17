/** Session helpers for lab threads — mirror of umbra-pro lab-persist. */
export type LabThreadType = "jb" | "recon" | "orchestrated";

export interface LabThreadMeta {
  type: LabThreadType;
  targetModel?: string;
  score?: number;
}

export function labTitle(type: LabThreadType, model?: string) {
  return `${type.toUpperCase()}${model ? " · " + model.split("/").pop() : ""}`;
}
