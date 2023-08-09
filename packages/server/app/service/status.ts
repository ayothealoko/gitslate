import { URL } from "url";
import { AppError } from "../errors/appError.js";
import { getStatusModel } from "../model/git/status.js";

import { Status } from "shared-code";

export async function getStatusService(gitDirURI: URL): Promise<Status> {
  return getStatusModel(gitDirURI);
}
