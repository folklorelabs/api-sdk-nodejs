import * as fs from "fs";
import { BaseParameters } from "../../parameters/index";
import { FileType } from "../../files/params/file-type";

export class UploadBatchFileParameters extends BaseParameters {
    setClientLibId(clientLibId: string, version: string): UploadBatchFileParameters {
        this.set("smartling.client_lib_id", JSON.stringify({
            client: clientLibId,
            version
        }));

        return this;
    }

    setCallbackUrl(callbackUrl: string): UploadBatchFileParameters {
        this.set("callbackUrl", callbackUrl);

        return this;
    }

    setLocalesToApprove(localesToApprove: Array<string>): UploadBatchFileParameters {
        this.set("localeIdsToAuthorize", localesToApprove);

        return this;
    }

    setFile(filePath: string): UploadBatchFileParameters {
        this.set("file", fs.createReadStream(
            fs.realpathSync(filePath)
        ));

        return this;
    }

    setFileUri(fileUri: string): UploadBatchFileParameters {
        this.set("fileUri", fileUri);

        return this;
    }

    setFileType(fileType: FileType): UploadBatchFileParameters {
        this.set("fileType", fileType);

        return this;
    }

    setDirective(key: string, value: string): UploadBatchFileParameters {
        this.set(`smartling.${key}`, value);

        return this;
    }
}
