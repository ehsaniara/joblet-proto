// package: joblet
// file: joblet.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Jobs extends jspb.Message { 
    clearJobsList(): void;
    getJobsList(): Array<Job>;
    setJobsList(value: Array<Job>): Jobs;
    addJobs(value?: Job, index?: number): Job;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Jobs.AsObject;
    static toObject(includeInstance: boolean, msg: Jobs): Jobs.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Jobs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Jobs;
    static deserializeBinaryFromReader(message: Jobs, reader: jspb.BinaryReader): Jobs;
}

export namespace Jobs {
    export type AsObject = {
        jobsList: Array<Job.AsObject>,
    }
}

export class Job extends jspb.Message { 
    getUuid(): string;
    setUuid(value: string): Job;
    getName(): string;
    setName(value: string): Job;
    getCommand(): string;
    setCommand(value: string): Job;
    clearArgsList(): void;
    getArgsList(): Array<string>;
    setArgsList(value: Array<string>): Job;
    addArgs(value: string, index?: number): string;
    getMaxcpu(): number;
    setMaxcpu(value: number): Job;
    getCpucores(): string;
    setCpucores(value: string): Job;
    getMaxmemory(): number;
    setMaxmemory(value: number): Job;
    getMaxiobps(): number;
    setMaxiobps(value: number): Job;
    getStatus(): string;
    setStatus(value: string): Job;
    getStarttime(): string;
    setStarttime(value: string): Job;
    getEndtime(): string;
    setEndtime(value: string): Job;
    getExitcode(): number;
    setExitcode(value: number): Job;
    getScheduledtime(): string;
    setScheduledtime(value: string): Job;
    getRuntime(): string;
    setRuntime(value: string): Job;

    getEnvironmentMap(): jspb.Map<string, string>;
    clearEnvironmentMap(): void;

    getSecretEnvironmentMap(): jspb.Map<string, string>;
    clearSecretEnvironmentMap(): void;
    clearGpuIndicesList(): void;
    getGpuIndicesList(): Array<number>;
    setGpuIndicesList(value: Array<number>): Job;
    addGpuIndices(value: number, index?: number): number;
    getGpuCount(): number;
    setGpuCount(value: number): Job;
    getGpuMemoryMb(): number;
    setGpuMemoryMb(value: number): Job;
    getNodeid(): string;
    setNodeid(value: string): Job;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Job.AsObject;
    static toObject(includeInstance: boolean, msg: Job): Job.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Job, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Job;
    static deserializeBinaryFromReader(message: Job, reader: jspb.BinaryReader): Job;
}

export namespace Job {
    export type AsObject = {
        uuid: string,
        name: string,
        command: string,
        argsList: Array<string>,
        maxcpu: number,
        cpucores: string,
        maxmemory: number,
        maxiobps: number,
        status: string,
        starttime: string,
        endtime: string,
        exitcode: number,
        scheduledtime: string,
        runtime: string,

        environmentMap: Array<[string, string]>,

        secretEnvironmentMap: Array<[string, string]>,
        gpuIndicesList: Array<number>,
        gpuCount: number,
        gpuMemoryMb: number,
        nodeid: string,
    }
}

export class EmptyRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EmptyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: EmptyRequest): EmptyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EmptyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EmptyRequest;
    static deserializeBinaryFromReader(message: EmptyRequest, reader: jspb.BinaryReader): EmptyRequest;
}

export namespace EmptyRequest {
    export type AsObject = {
    }
}

export class FileUpload extends jspb.Message { 
    getPath(): string;
    setPath(value: string): FileUpload;
    getContent(): Uint8Array | string;
    getContent_asU8(): Uint8Array;
    getContent_asB64(): string;
    setContent(value: Uint8Array | string): FileUpload;
    getMode(): number;
    setMode(value: number): FileUpload;
    getIsdirectory(): boolean;
    setIsdirectory(value: boolean): FileUpload;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FileUpload.AsObject;
    static toObject(includeInstance: boolean, msg: FileUpload): FileUpload.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FileUpload, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FileUpload;
    static deserializeBinaryFromReader(message: FileUpload, reader: jspb.BinaryReader): FileUpload;
}

export namespace FileUpload {
    export type AsObject = {
        path: string,
        content: Uint8Array | string,
        mode: number,
        isdirectory: boolean,
    }
}

export class GetJobStatusReq extends jspb.Message { 
    getUuid(): string;
    setUuid(value: string): GetJobStatusReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetJobStatusReq.AsObject;
    static toObject(includeInstance: boolean, msg: GetJobStatusReq): GetJobStatusReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetJobStatusReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetJobStatusReq;
    static deserializeBinaryFromReader(message: GetJobStatusReq, reader: jspb.BinaryReader): GetJobStatusReq;
}

export namespace GetJobStatusReq {
    export type AsObject = {
        uuid: string,
    }
}

export class GetJobStatusRes extends jspb.Message { 
    getUuid(): string;
    setUuid(value: string): GetJobStatusRes;
    getName(): string;
    setName(value: string): GetJobStatusRes;
    getCommand(): string;
    setCommand(value: string): GetJobStatusRes;
    clearArgsList(): void;
    getArgsList(): Array<string>;
    setArgsList(value: Array<string>): GetJobStatusRes;
    addArgs(value: string, index?: number): string;
    getMaxcpu(): number;
    setMaxcpu(value: number): GetJobStatusRes;
    getCpucores(): string;
    setCpucores(value: string): GetJobStatusRes;
    getMaxmemory(): number;
    setMaxmemory(value: number): GetJobStatusRes;
    getMaxiobps(): number;
    setMaxiobps(value: number): GetJobStatusRes;
    getStatus(): string;
    setStatus(value: string): GetJobStatusRes;
    getStarttime(): string;
    setStarttime(value: string): GetJobStatusRes;
    getEndtime(): string;
    setEndtime(value: string): GetJobStatusRes;
    getExitcode(): number;
    setExitcode(value: number): GetJobStatusRes;
    getScheduledtime(): string;
    setScheduledtime(value: string): GetJobStatusRes;

    getEnvironmentMap(): jspb.Map<string, string>;
    clearEnvironmentMap(): void;

    getSecretEnvironmentMap(): jspb.Map<string, string>;
    clearSecretEnvironmentMap(): void;
    getNetwork(): string;
    setNetwork(value: string): GetJobStatusRes;
    clearVolumesList(): void;
    getVolumesList(): Array<string>;
    setVolumesList(value: Array<string>): GetJobStatusRes;
    addVolumes(value: string, index?: number): string;
    getRuntime(): string;
    setRuntime(value: string): GetJobStatusRes;
    getWorkdir(): string;
    setWorkdir(value: string): GetJobStatusRes;
    clearUploadsList(): void;
    getUploadsList(): Array<string>;
    setUploadsList(value: Array<string>): GetJobStatusRes;
    addUploads(value: string, index?: number): string;
    clearGpuIndicesList(): void;
    getGpuIndicesList(): Array<number>;
    setGpuIndicesList(value: Array<number>): GetJobStatusRes;
    addGpuIndices(value: number, index?: number): number;
    getGpuCount(): number;
    setGpuCount(value: number): GetJobStatusRes;
    getGpuMemoryMb(): number;
    setGpuMemoryMb(value: number): GetJobStatusRes;
    getNodeid(): string;
    setNodeid(value: string): GetJobStatusRes;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetJobStatusRes.AsObject;
    static toObject(includeInstance: boolean, msg: GetJobStatusRes): GetJobStatusRes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetJobStatusRes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetJobStatusRes;
    static deserializeBinaryFromReader(message: GetJobStatusRes, reader: jspb.BinaryReader): GetJobStatusRes;
}

export namespace GetJobStatusRes {
    export type AsObject = {
        uuid: string,
        name: string,
        command: string,
        argsList: Array<string>,
        maxcpu: number,
        cpucores: string,
        maxmemory: number,
        maxiobps: number,
        status: string,
        starttime: string,
        endtime: string,
        exitcode: number,
        scheduledtime: string,

        environmentMap: Array<[string, string]>,

        secretEnvironmentMap: Array<[string, string]>,
        network: string,
        volumesList: Array<string>,
        runtime: string,
        workdir: string,
        uploadsList: Array<string>,
        gpuIndicesList: Array<number>,
        gpuCount: number,
        gpuMemoryMb: number,
        nodeid: string,
    }
}

export class StopJobReq extends jspb.Message { 
    getUuid(): string;
    setUuid(value: string): StopJobReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopJobReq.AsObject;
    static toObject(includeInstance: boolean, msg: StopJobReq): StopJobReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopJobReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopJobReq;
    static deserializeBinaryFromReader(message: StopJobReq, reader: jspb.BinaryReader): StopJobReq;
}

export namespace StopJobReq {
    export type AsObject = {
        uuid: string,
    }
}

export class StopJobRes extends jspb.Message { 
    getUuid(): string;
    setUuid(value: string): StopJobRes;
    getStatus(): string;
    setStatus(value: string): StopJobRes;
    getEndtime(): string;
    setEndtime(value: string): StopJobRes;
    getExitcode(): number;
    setExitcode(value: number): StopJobRes;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopJobRes.AsObject;
    static toObject(includeInstance: boolean, msg: StopJobRes): StopJobRes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopJobRes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopJobRes;
    static deserializeBinaryFromReader(message: StopJobRes, reader: jspb.BinaryReader): StopJobRes;
}

export namespace StopJobRes {
    export type AsObject = {
        uuid: string,
        status: string,
        endtime: string,
        exitcode: number,
    }
}

export class CancelJobReq extends jspb.Message { 
    getUuid(): string;
    setUuid(value: string): CancelJobReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CancelJobReq.AsObject;
    static toObject(includeInstance: boolean, msg: CancelJobReq): CancelJobReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CancelJobReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CancelJobReq;
    static deserializeBinaryFromReader(message: CancelJobReq, reader: jspb.BinaryReader): CancelJobReq;
}

export namespace CancelJobReq {
    export type AsObject = {
        uuid: string,
    }
}

export class CancelJobRes extends jspb.Message { 
    getUuid(): string;
    setUuid(value: string): CancelJobRes;
    getStatus(): string;
    setStatus(value: string): CancelJobRes;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CancelJobRes.AsObject;
    static toObject(includeInstance: boolean, msg: CancelJobRes): CancelJobRes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CancelJobRes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CancelJobRes;
    static deserializeBinaryFromReader(message: CancelJobRes, reader: jspb.BinaryReader): CancelJobRes;
}

export namespace CancelJobRes {
    export type AsObject = {
        uuid: string,
        status: string,
    }
}

export class DeleteJobReq extends jspb.Message { 
    getUuid(): string;
    setUuid(value: string): DeleteJobReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteJobReq.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteJobReq): DeleteJobReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteJobReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteJobReq;
    static deserializeBinaryFromReader(message: DeleteJobReq, reader: jspb.BinaryReader): DeleteJobReq;
}

export namespace DeleteJobReq {
    export type AsObject = {
        uuid: string,
    }
}

export class DeleteJobRes extends jspb.Message { 
    getUuid(): string;
    setUuid(value: string): DeleteJobRes;
    getSuccess(): boolean;
    setSuccess(value: boolean): DeleteJobRes;
    getMessage(): string;
    setMessage(value: string): DeleteJobRes;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteJobRes.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteJobRes): DeleteJobRes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteJobRes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteJobRes;
    static deserializeBinaryFromReader(message: DeleteJobRes, reader: jspb.BinaryReader): DeleteJobRes;
}

export namespace DeleteJobRes {
    export type AsObject = {
        uuid: string,
        success: boolean,
        message: string,
    }
}

export class DeleteAllJobsReq extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteAllJobsReq.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteAllJobsReq): DeleteAllJobsReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteAllJobsReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteAllJobsReq;
    static deserializeBinaryFromReader(message: DeleteAllJobsReq, reader: jspb.BinaryReader): DeleteAllJobsReq;
}

export namespace DeleteAllJobsReq {
    export type AsObject = {
    }
}

export class DeleteAllJobsRes extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): DeleteAllJobsRes;
    getMessage(): string;
    setMessage(value: string): DeleteAllJobsRes;
    getDeletedCount(): number;
    setDeletedCount(value: number): DeleteAllJobsRes;
    getSkippedCount(): number;
    setSkippedCount(value: number): DeleteAllJobsRes;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteAllJobsRes.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteAllJobsRes): DeleteAllJobsRes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteAllJobsRes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteAllJobsRes;
    static deserializeBinaryFromReader(message: DeleteAllJobsRes, reader: jspb.BinaryReader): DeleteAllJobsRes;
}

export namespace DeleteAllJobsRes {
    export type AsObject = {
        success: boolean,
        message: string,
        deletedCount: number,
        skippedCount: number,
    }
}

export class GetJobLogsReq extends jspb.Message { 
    getUuid(): string;
    setUuid(value: string): GetJobLogsReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetJobLogsReq.AsObject;
    static toObject(includeInstance: boolean, msg: GetJobLogsReq): GetJobLogsReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetJobLogsReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetJobLogsReq;
    static deserializeBinaryFromReader(message: GetJobLogsReq, reader: jspb.BinaryReader): GetJobLogsReq;
}

export namespace GetJobLogsReq {
    export type AsObject = {
        uuid: string,
    }
}

export class DataChunk extends jspb.Message { 
    getPayload(): Uint8Array | string;
    getPayload_asU8(): Uint8Array;
    getPayload_asB64(): string;
    setPayload(value: Uint8Array | string): DataChunk;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DataChunk.AsObject;
    static toObject(includeInstance: boolean, msg: DataChunk): DataChunk.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DataChunk, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DataChunk;
    static deserializeBinaryFromReader(message: DataChunk, reader: jspb.BinaryReader): DataChunk;
}

export namespace DataChunk {
    export type AsObject = {
        payload: Uint8Array | string,
    }
}

export class BuildRuntimeRequest extends jspb.Message { 
    getYamlContent(): string;
    setYamlContent(value: string): BuildRuntimeRequest;
    getDryRun(): boolean;
    setDryRun(value: boolean): BuildRuntimeRequest;
    getVerbose(): boolean;
    setVerbose(value: boolean): BuildRuntimeRequest;
    getForceRebuild(): boolean;
    setForceRebuild(value: boolean): BuildRuntimeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BuildRuntimeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BuildRuntimeRequest): BuildRuntimeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BuildRuntimeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BuildRuntimeRequest;
    static deserializeBinaryFromReader(message: BuildRuntimeRequest, reader: jspb.BinaryReader): BuildRuntimeRequest;
}

export namespace BuildRuntimeRequest {
    export type AsObject = {
        yamlContent: string,
        dryRun: boolean,
        verbose: boolean,
        forceRebuild: boolean,
    }
}

export class BuildRuntimeProgress extends jspb.Message { 

    hasPhase(): boolean;
    clearPhase(): void;
    getPhase(): BuildPhaseProgress | undefined;
    setPhase(value?: BuildPhaseProgress): BuildRuntimeProgress;

    hasLog(): boolean;
    clearLog(): void;
    getLog(): BuildLogLine | undefined;
    setLog(value?: BuildLogLine): BuildRuntimeProgress;

    hasResult(): boolean;
    clearResult(): void;
    getResult(): BuildResult | undefined;
    setResult(value?: BuildResult): BuildRuntimeProgress;

    getProgressTypeCase(): BuildRuntimeProgress.ProgressTypeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BuildRuntimeProgress.AsObject;
    static toObject(includeInstance: boolean, msg: BuildRuntimeProgress): BuildRuntimeProgress.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BuildRuntimeProgress, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BuildRuntimeProgress;
    static deserializeBinaryFromReader(message: BuildRuntimeProgress, reader: jspb.BinaryReader): BuildRuntimeProgress;
}

export namespace BuildRuntimeProgress {
    export type AsObject = {
        phase?: BuildPhaseProgress.AsObject,
        log?: BuildLogLine.AsObject,
        result?: BuildResult.AsObject,
    }

    export enum ProgressTypeCase {
        PROGRESS_TYPE_NOT_SET = 0,
        PHASE = 1,
        LOG = 2,
        RESULT = 3,
    }

}

export class BuildPhaseProgress extends jspb.Message { 
    getPhaseNumber(): number;
    setPhaseNumber(value: number): BuildPhaseProgress;
    getTotalPhases(): number;
    setTotalPhases(value: number): BuildPhaseProgress;
    getPhaseName(): string;
    setPhaseName(value: string): BuildPhaseProgress;
    getMessage(): string;
    setMessage(value: string): BuildPhaseProgress;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BuildPhaseProgress.AsObject;
    static toObject(includeInstance: boolean, msg: BuildPhaseProgress): BuildPhaseProgress.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BuildPhaseProgress, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BuildPhaseProgress;
    static deserializeBinaryFromReader(message: BuildPhaseProgress, reader: jspb.BinaryReader): BuildPhaseProgress;
}

export namespace BuildPhaseProgress {
    export type AsObject = {
        phaseNumber: number,
        totalPhases: number,
        phaseName: string,
        message: string,
    }
}

export class BuildLogLine extends jspb.Message { 
    getLevel(): string;
    setLevel(value: string): BuildLogLine;
    getMessage(): string;
    setMessage(value: string): BuildLogLine;
    getTimestamp(): number;
    setTimestamp(value: number): BuildLogLine;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BuildLogLine.AsObject;
    static toObject(includeInstance: boolean, msg: BuildLogLine): BuildLogLine.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BuildLogLine, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BuildLogLine;
    static deserializeBinaryFromReader(message: BuildLogLine, reader: jspb.BinaryReader): BuildLogLine;
}

export namespace BuildLogLine {
    export type AsObject = {
        level: string,
        message: string,
        timestamp: number,
    }
}

export class BuildResult extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): BuildResult;
    getMessage(): string;
    setMessage(value: string): BuildResult;
    getRuntimeName(): string;
    setRuntimeName(value: string): BuildResult;
    getRuntimeVersion(): string;
    setRuntimeVersion(value: string): BuildResult;
    getInstallPath(): string;
    setInstallPath(value: string): BuildResult;
    getSizeBytes(): number;
    setSizeBytes(value: number): BuildResult;
    getBuildDurationMs(): number;
    setBuildDurationMs(value: number): BuildResult;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BuildResult.AsObject;
    static toObject(includeInstance: boolean, msg: BuildResult): BuildResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BuildResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BuildResult;
    static deserializeBinaryFromReader(message: BuildResult, reader: jspb.BinaryReader): BuildResult;
}

export namespace BuildResult {
    export type AsObject = {
        success: boolean,
        message: string,
        runtimeName: string,
        runtimeVersion: string,
        installPath: string,
        sizeBytes: number,
        buildDurationMs: number,
    }
}

export class ValidateRuntimeYAMLRequest extends jspb.Message { 
    getYamlContent(): string;
    setYamlContent(value: string): ValidateRuntimeYAMLRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidateRuntimeYAMLRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ValidateRuntimeYAMLRequest): ValidateRuntimeYAMLRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidateRuntimeYAMLRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidateRuntimeYAMLRequest;
    static deserializeBinaryFromReader(message: ValidateRuntimeYAMLRequest, reader: jspb.BinaryReader): ValidateRuntimeYAMLRequest;
}

export namespace ValidateRuntimeYAMLRequest {
    export type AsObject = {
        yamlContent: string,
    }
}

export class ValidateRuntimeYAMLResponse extends jspb.Message { 
    getValid(): boolean;
    setValid(value: boolean): ValidateRuntimeYAMLResponse;
    getMessage(): string;
    setMessage(value: string): ValidateRuntimeYAMLResponse;
    clearErrorsList(): void;
    getErrorsList(): Array<string>;
    setErrorsList(value: Array<string>): ValidateRuntimeYAMLResponse;
    addErrors(value: string, index?: number): string;
    clearWarningsList(): void;
    getWarningsList(): Array<string>;
    setWarningsList(value: Array<string>): ValidateRuntimeYAMLResponse;
    addWarnings(value: string, index?: number): string;

    hasSpecInfo(): boolean;
    clearSpecInfo(): void;
    getSpecInfo(): RuntimeYAMLInfo | undefined;
    setSpecInfo(value?: RuntimeYAMLInfo): ValidateRuntimeYAMLResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidateRuntimeYAMLResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ValidateRuntimeYAMLResponse): ValidateRuntimeYAMLResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidateRuntimeYAMLResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidateRuntimeYAMLResponse;
    static deserializeBinaryFromReader(message: ValidateRuntimeYAMLResponse, reader: jspb.BinaryReader): ValidateRuntimeYAMLResponse;
}

export namespace ValidateRuntimeYAMLResponse {
    export type AsObject = {
        valid: boolean,
        message: string,
        errorsList: Array<string>,
        warningsList: Array<string>,
        specInfo?: RuntimeYAMLInfo.AsObject,
    }
}

export class RuntimeYAMLInfo extends jspb.Message { 
    getName(): string;
    setName(value: string): RuntimeYAMLInfo;
    getVersion(): string;
    setVersion(value: string): RuntimeYAMLInfo;
    getLanguage(): string;
    setLanguage(value: string): RuntimeYAMLInfo;
    getLanguageVersion(): string;
    setLanguageVersion(value: string): RuntimeYAMLInfo;
    getDescription(): string;
    setDescription(value: string): RuntimeYAMLInfo;
    clearPipPackagesList(): void;
    getPipPackagesList(): Array<string>;
    setPipPackagesList(value: Array<string>): RuntimeYAMLInfo;
    addPipPackages(value: string, index?: number): string;
    clearNpmPackagesList(): void;
    getNpmPackagesList(): Array<string>;
    setNpmPackagesList(value: Array<string>): RuntimeYAMLInfo;
    addNpmPackages(value: string, index?: number): string;
    getHasHooks(): boolean;
    setHasHooks(value: boolean): RuntimeYAMLInfo;
    getRequiresGpu(): boolean;
    setRequiresGpu(value: boolean): RuntimeYAMLInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RuntimeYAMLInfo.AsObject;
    static toObject(includeInstance: boolean, msg: RuntimeYAMLInfo): RuntimeYAMLInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RuntimeYAMLInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RuntimeYAMLInfo;
    static deserializeBinaryFromReader(message: RuntimeYAMLInfo, reader: jspb.BinaryReader): RuntimeYAMLInfo;
}

export namespace RuntimeYAMLInfo {
    export type AsObject = {
        name: string,
        version: string,
        language: string,
        languageVersion: string,
        description: string,
        pipPackagesList: Array<string>,
        npmPackagesList: Array<string>,
        hasHooks: boolean,
        requiresGpu: boolean,
    }
}

export class CreateNetworkReq extends jspb.Message { 
    getName(): string;
    setName(value: string): CreateNetworkReq;
    getCidr(): string;
    setCidr(value: string): CreateNetworkReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateNetworkReq.AsObject;
    static toObject(includeInstance: boolean, msg: CreateNetworkReq): CreateNetworkReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateNetworkReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateNetworkReq;
    static deserializeBinaryFromReader(message: CreateNetworkReq, reader: jspb.BinaryReader): CreateNetworkReq;
}

export namespace CreateNetworkReq {
    export type AsObject = {
        name: string,
        cidr: string,
    }
}

export class CreateNetworkRes extends jspb.Message { 
    getName(): string;
    setName(value: string): CreateNetworkRes;
    getCidr(): string;
    setCidr(value: string): CreateNetworkRes;
    getBridge(): string;
    setBridge(value: string): CreateNetworkRes;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateNetworkRes.AsObject;
    static toObject(includeInstance: boolean, msg: CreateNetworkRes): CreateNetworkRes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateNetworkRes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateNetworkRes;
    static deserializeBinaryFromReader(message: CreateNetworkRes, reader: jspb.BinaryReader): CreateNetworkRes;
}

export namespace CreateNetworkRes {
    export type AsObject = {
        name: string,
        cidr: string,
        bridge: string,
    }
}

export class RemoveNetworkReq extends jspb.Message { 
    getName(): string;
    setName(value: string): RemoveNetworkReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveNetworkReq.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveNetworkReq): RemoveNetworkReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveNetworkReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveNetworkReq;
    static deserializeBinaryFromReader(message: RemoveNetworkReq, reader: jspb.BinaryReader): RemoveNetworkReq;
}

export namespace RemoveNetworkReq {
    export type AsObject = {
        name: string,
    }
}

export class RemoveNetworkRes extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): RemoveNetworkRes;
    getMessage(): string;
    setMessage(value: string): RemoveNetworkRes;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveNetworkRes.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveNetworkRes): RemoveNetworkRes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveNetworkRes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveNetworkRes;
    static deserializeBinaryFromReader(message: RemoveNetworkRes, reader: jspb.BinaryReader): RemoveNetworkRes;
}

export namespace RemoveNetworkRes {
    export type AsObject = {
        success: boolean,
        message: string,
    }
}

export class Network extends jspb.Message { 
    getName(): string;
    setName(value: string): Network;
    getCidr(): string;
    setCidr(value: string): Network;
    getBridge(): string;
    setBridge(value: string): Network;
    getJobcount(): number;
    setJobcount(value: number): Network;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Network.AsObject;
    static toObject(includeInstance: boolean, msg: Network): Network.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Network, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Network;
    static deserializeBinaryFromReader(message: Network, reader: jspb.BinaryReader): Network;
}

export namespace Network {
    export type AsObject = {
        name: string,
        cidr: string,
        bridge: string,
        jobcount: number,
    }
}

export class Networks extends jspb.Message { 
    clearNetworksList(): void;
    getNetworksList(): Array<Network>;
    setNetworksList(value: Array<Network>): Networks;
    addNetworks(value?: Network, index?: number): Network;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Networks.AsObject;
    static toObject(includeInstance: boolean, msg: Networks): Networks.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Networks, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Networks;
    static deserializeBinaryFromReader(message: Networks, reader: jspb.BinaryReader): Networks;
}

export namespace Networks {
    export type AsObject = {
        networksList: Array<Network.AsObject>,
    }
}

export class CreateVolumeReq extends jspb.Message { 
    getName(): string;
    setName(value: string): CreateVolumeReq;
    getSize(): string;
    setSize(value: string): CreateVolumeReq;
    getType(): string;
    setType(value: string): CreateVolumeReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateVolumeReq.AsObject;
    static toObject(includeInstance: boolean, msg: CreateVolumeReq): CreateVolumeReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateVolumeReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateVolumeReq;
    static deserializeBinaryFromReader(message: CreateVolumeReq, reader: jspb.BinaryReader): CreateVolumeReq;
}

export namespace CreateVolumeReq {
    export type AsObject = {
        name: string,
        size: string,
        type: string,
    }
}

export class CreateVolumeRes extends jspb.Message { 
    getName(): string;
    setName(value: string): CreateVolumeRes;
    getSize(): string;
    setSize(value: string): CreateVolumeRes;
    getType(): string;
    setType(value: string): CreateVolumeRes;
    getPath(): string;
    setPath(value: string): CreateVolumeRes;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateVolumeRes.AsObject;
    static toObject(includeInstance: boolean, msg: CreateVolumeRes): CreateVolumeRes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateVolumeRes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateVolumeRes;
    static deserializeBinaryFromReader(message: CreateVolumeRes, reader: jspb.BinaryReader): CreateVolumeRes;
}

export namespace CreateVolumeRes {
    export type AsObject = {
        name: string,
        size: string,
        type: string,
        path: string,
    }
}

export class RemoveVolumeReq extends jspb.Message { 
    getName(): string;
    setName(value: string): RemoveVolumeReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveVolumeReq.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveVolumeReq): RemoveVolumeReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveVolumeReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveVolumeReq;
    static deserializeBinaryFromReader(message: RemoveVolumeReq, reader: jspb.BinaryReader): RemoveVolumeReq;
}

export namespace RemoveVolumeReq {
    export type AsObject = {
        name: string,
    }
}

export class RemoveVolumeRes extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): RemoveVolumeRes;
    getMessage(): string;
    setMessage(value: string): RemoveVolumeRes;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveVolumeRes.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveVolumeRes): RemoveVolumeRes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveVolumeRes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveVolumeRes;
    static deserializeBinaryFromReader(message: RemoveVolumeRes, reader: jspb.BinaryReader): RemoveVolumeRes;
}

export namespace RemoveVolumeRes {
    export type AsObject = {
        success: boolean,
        message: string,
    }
}

export class Volume extends jspb.Message { 
    getName(): string;
    setName(value: string): Volume;
    getSize(): string;
    setSize(value: string): Volume;
    getType(): string;
    setType(value: string): Volume;
    getPath(): string;
    setPath(value: string): Volume;
    getCreatedtime(): string;
    setCreatedtime(value: string): Volume;
    getJobcount(): number;
    setJobcount(value: number): Volume;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Volume.AsObject;
    static toObject(includeInstance: boolean, msg: Volume): Volume.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Volume, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Volume;
    static deserializeBinaryFromReader(message: Volume, reader: jspb.BinaryReader): Volume;
}

export namespace Volume {
    export type AsObject = {
        name: string,
        size: string,
        type: string,
        path: string,
        createdtime: string,
        jobcount: number,
    }
}

export class Volumes extends jspb.Message { 
    clearVolumesList(): void;
    getVolumesList(): Array<Volume>;
    setVolumesList(value: Array<Volume>): Volumes;
    addVolumes(value?: Volume, index?: number): Volume;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Volumes.AsObject;
    static toObject(includeInstance: boolean, msg: Volumes): Volumes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Volumes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Volumes;
    static deserializeBinaryFromReader(message: Volumes, reader: jspb.BinaryReader): Volumes;
}

export namespace Volumes {
    export type AsObject = {
        volumesList: Array<Volume.AsObject>,
    }
}

export class SystemStatusRes extends jspb.Message { 
    getTimestamp(): string;
    setTimestamp(value: string): SystemStatusRes;
    getAvailable(): boolean;
    setAvailable(value: boolean): SystemStatusRes;

    hasHost(): boolean;
    clearHost(): void;
    getHost(): HostInfo | undefined;
    setHost(value?: HostInfo): SystemStatusRes;

    hasCpu(): boolean;
    clearCpu(): void;
    getCpu(): CPUMetrics | undefined;
    setCpu(value?: CPUMetrics): SystemStatusRes;

    hasMemory(): boolean;
    clearMemory(): void;
    getMemory(): MemoryMetrics | undefined;
    setMemory(value?: MemoryMetrics): SystemStatusRes;
    clearDisksList(): void;
    getDisksList(): Array<DiskMetrics>;
    setDisksList(value: Array<DiskMetrics>): SystemStatusRes;
    addDisks(value?: DiskMetrics, index?: number): DiskMetrics;
    clearNetworksList(): void;
    getNetworksList(): Array<NetworkMetrics>;
    setNetworksList(value: Array<NetworkMetrics>): SystemStatusRes;
    addNetworks(value?: NetworkMetrics, index?: number): NetworkMetrics;

    hasIo(): boolean;
    clearIo(): void;
    getIo(): IOMetrics | undefined;
    setIo(value?: IOMetrics): SystemStatusRes;

    hasProcesses(): boolean;
    clearProcesses(): void;
    getProcesses(): ProcessMetrics | undefined;
    setProcesses(value?: ProcessMetrics): SystemStatusRes;

    hasCloud(): boolean;
    clearCloud(): void;
    getCloud(): CloudInfo | undefined;
    setCloud(value?: CloudInfo): SystemStatusRes;

    hasServerVersion(): boolean;
    clearServerVersion(): void;
    getServerVersion(): ServerVersionInfo | undefined;
    setServerVersion(value?: ServerVersionInfo): SystemStatusRes;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SystemStatusRes.AsObject;
    static toObject(includeInstance: boolean, msg: SystemStatusRes): SystemStatusRes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SystemStatusRes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SystemStatusRes;
    static deserializeBinaryFromReader(message: SystemStatusRes, reader: jspb.BinaryReader): SystemStatusRes;
}

export namespace SystemStatusRes {
    export type AsObject = {
        timestamp: string,
        available: boolean,
        host?: HostInfo.AsObject,
        cpu?: CPUMetrics.AsObject,
        memory?: MemoryMetrics.AsObject,
        disksList: Array<DiskMetrics.AsObject>,
        networksList: Array<NetworkMetrics.AsObject>,
        io?: IOMetrics.AsObject,
        processes?: ProcessMetrics.AsObject,
        cloud?: CloudInfo.AsObject,
        serverVersion?: ServerVersionInfo.AsObject,
    }
}

export class SystemMetricsRes extends jspb.Message { 
    getTimestamp(): string;
    setTimestamp(value: string): SystemMetricsRes;

    hasHost(): boolean;
    clearHost(): void;
    getHost(): HostInfo | undefined;
    setHost(value?: HostInfo): SystemMetricsRes;

    hasCpu(): boolean;
    clearCpu(): void;
    getCpu(): CPUMetrics | undefined;
    setCpu(value?: CPUMetrics): SystemMetricsRes;

    hasMemory(): boolean;
    clearMemory(): void;
    getMemory(): MemoryMetrics | undefined;
    setMemory(value?: MemoryMetrics): SystemMetricsRes;
    clearDisksList(): void;
    getDisksList(): Array<DiskMetrics>;
    setDisksList(value: Array<DiskMetrics>): SystemMetricsRes;
    addDisks(value?: DiskMetrics, index?: number): DiskMetrics;
    clearNetworksList(): void;
    getNetworksList(): Array<NetworkMetrics>;
    setNetworksList(value: Array<NetworkMetrics>): SystemMetricsRes;
    addNetworks(value?: NetworkMetrics, index?: number): NetworkMetrics;

    hasIo(): boolean;
    clearIo(): void;
    getIo(): IOMetrics | undefined;
    setIo(value?: IOMetrics): SystemMetricsRes;

    hasProcesses(): boolean;
    clearProcesses(): void;
    getProcesses(): ProcessMetrics | undefined;
    setProcesses(value?: ProcessMetrics): SystemMetricsRes;

    hasCloud(): boolean;
    clearCloud(): void;
    getCloud(): CloudInfo | undefined;
    setCloud(value?: CloudInfo): SystemMetricsRes;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SystemMetricsRes.AsObject;
    static toObject(includeInstance: boolean, msg: SystemMetricsRes): SystemMetricsRes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SystemMetricsRes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SystemMetricsRes;
    static deserializeBinaryFromReader(message: SystemMetricsRes, reader: jspb.BinaryReader): SystemMetricsRes;
}

export namespace SystemMetricsRes {
    export type AsObject = {
        timestamp: string,
        host?: HostInfo.AsObject,
        cpu?: CPUMetrics.AsObject,
        memory?: MemoryMetrics.AsObject,
        disksList: Array<DiskMetrics.AsObject>,
        networksList: Array<NetworkMetrics.AsObject>,
        io?: IOMetrics.AsObject,
        processes?: ProcessMetrics.AsObject,
        cloud?: CloudInfo.AsObject,
    }
}

export class StreamMetricsReq extends jspb.Message { 
    getIntervalseconds(): number;
    setIntervalseconds(value: number): StreamMetricsReq;
    clearMetrictypesList(): void;
    getMetrictypesList(): Array<string>;
    setMetrictypesList(value: Array<string>): StreamMetricsReq;
    addMetrictypes(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamMetricsReq.AsObject;
    static toObject(includeInstance: boolean, msg: StreamMetricsReq): StreamMetricsReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamMetricsReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamMetricsReq;
    static deserializeBinaryFromReader(message: StreamMetricsReq, reader: jspb.BinaryReader): StreamMetricsReq;
}

export namespace StreamMetricsReq {
    export type AsObject = {
        intervalseconds: number,
        metrictypesList: Array<string>,
    }
}

export class HostInfo extends jspb.Message { 
    getHostname(): string;
    setHostname(value: string): HostInfo;
    getOs(): string;
    setOs(value: string): HostInfo;
    getPlatform(): string;
    setPlatform(value: string): HostInfo;
    getPlatformfamily(): string;
    setPlatformfamily(value: string): HostInfo;
    getPlatformversion(): string;
    setPlatformversion(value: string): HostInfo;
    getKernelversion(): string;
    setKernelversion(value: string): HostInfo;
    getKernelarch(): string;
    setKernelarch(value: string): HostInfo;
    getArchitecture(): string;
    setArchitecture(value: string): HostInfo;
    getCpucount(): number;
    setCpucount(value: number): HostInfo;
    getTotalmemory(): number;
    setTotalmemory(value: number): HostInfo;
    getBoottime(): string;
    setBoottime(value: string): HostInfo;
    getUptime(): number;
    setUptime(value: number): HostInfo;
    getNodeid(): string;
    setNodeid(value: string): HostInfo;
    clearServeripsList(): void;
    getServeripsList(): Array<string>;
    setServeripsList(value: Array<string>): HostInfo;
    addServerips(value: string, index?: number): string;
    clearMacaddressesList(): void;
    getMacaddressesList(): Array<string>;
    setMacaddressesList(value: Array<string>): HostInfo;
    addMacaddresses(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HostInfo.AsObject;
    static toObject(includeInstance: boolean, msg: HostInfo): HostInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HostInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HostInfo;
    static deserializeBinaryFromReader(message: HostInfo, reader: jspb.BinaryReader): HostInfo;
}

export namespace HostInfo {
    export type AsObject = {
        hostname: string,
        os: string,
        platform: string,
        platformfamily: string,
        platformversion: string,
        kernelversion: string,
        kernelarch: string,
        architecture: string,
        cpucount: number,
        totalmemory: number,
        boottime: string,
        uptime: number,
        nodeid: string,
        serveripsList: Array<string>,
        macaddressesList: Array<string>,
    }
}

export class CPUMetrics extends jspb.Message { 
    getCores(): number;
    setCores(value: number): CPUMetrics;
    getUsagepercent(): number;
    setUsagepercent(value: number): CPUMetrics;
    getUsertime(): number;
    setUsertime(value: number): CPUMetrics;
    getSystemtime(): number;
    setSystemtime(value: number): CPUMetrics;
    getIdletime(): number;
    setIdletime(value: number): CPUMetrics;
    getIowaittime(): number;
    setIowaittime(value: number): CPUMetrics;
    getStealtime(): number;
    setStealtime(value: number): CPUMetrics;
    clearLoadaverageList(): void;
    getLoadaverageList(): Array<number>;
    setLoadaverageList(value: Array<number>): CPUMetrics;
    addLoadaverage(value: number, index?: number): number;
    clearPercoreusageList(): void;
    getPercoreusageList(): Array<number>;
    setPercoreusageList(value: Array<number>): CPUMetrics;
    addPercoreusage(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CPUMetrics.AsObject;
    static toObject(includeInstance: boolean, msg: CPUMetrics): CPUMetrics.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CPUMetrics, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CPUMetrics;
    static deserializeBinaryFromReader(message: CPUMetrics, reader: jspb.BinaryReader): CPUMetrics;
}

export namespace CPUMetrics {
    export type AsObject = {
        cores: number,
        usagepercent: number,
        usertime: number,
        systemtime: number,
        idletime: number,
        iowaittime: number,
        stealtime: number,
        loadaverageList: Array<number>,
        percoreusageList: Array<number>,
    }
}

export class MemoryMetrics extends jspb.Message { 
    getTotalbytes(): number;
    setTotalbytes(value: number): MemoryMetrics;
    getUsedbytes(): number;
    setUsedbytes(value: number): MemoryMetrics;
    getFreebytes(): number;
    setFreebytes(value: number): MemoryMetrics;
    getAvailablebytes(): number;
    setAvailablebytes(value: number): MemoryMetrics;
    getUsagepercent(): number;
    setUsagepercent(value: number): MemoryMetrics;
    getCachedbytes(): number;
    setCachedbytes(value: number): MemoryMetrics;
    getBufferedbytes(): number;
    setBufferedbytes(value: number): MemoryMetrics;
    getSwaptotal(): number;
    setSwaptotal(value: number): MemoryMetrics;
    getSwapused(): number;
    setSwapused(value: number): MemoryMetrics;
    getSwapfree(): number;
    setSwapfree(value: number): MemoryMetrics;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MemoryMetrics.AsObject;
    static toObject(includeInstance: boolean, msg: MemoryMetrics): MemoryMetrics.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MemoryMetrics, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MemoryMetrics;
    static deserializeBinaryFromReader(message: MemoryMetrics, reader: jspb.BinaryReader): MemoryMetrics;
}

export namespace MemoryMetrics {
    export type AsObject = {
        totalbytes: number,
        usedbytes: number,
        freebytes: number,
        availablebytes: number,
        usagepercent: number,
        cachedbytes: number,
        bufferedbytes: number,
        swaptotal: number,
        swapused: number,
        swapfree: number,
    }
}

export class DiskMetrics extends jspb.Message { 
    getDevice(): string;
    setDevice(value: string): DiskMetrics;
    getMountpoint(): string;
    setMountpoint(value: string): DiskMetrics;
    getFilesystem(): string;
    setFilesystem(value: string): DiskMetrics;
    getTotalbytes(): number;
    setTotalbytes(value: number): DiskMetrics;
    getUsedbytes(): number;
    setUsedbytes(value: number): DiskMetrics;
    getFreebytes(): number;
    setFreebytes(value: number): DiskMetrics;
    getUsagepercent(): number;
    setUsagepercent(value: number): DiskMetrics;
    getInodestotal(): number;
    setInodestotal(value: number): DiskMetrics;
    getInodesused(): number;
    setInodesused(value: number): DiskMetrics;
    getInodesfree(): number;
    setInodesfree(value: number): DiskMetrics;
    getInodesusagepercent(): number;
    setInodesusagepercent(value: number): DiskMetrics;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DiskMetrics.AsObject;
    static toObject(includeInstance: boolean, msg: DiskMetrics): DiskMetrics.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DiskMetrics, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DiskMetrics;
    static deserializeBinaryFromReader(message: DiskMetrics, reader: jspb.BinaryReader): DiskMetrics;
}

export namespace DiskMetrics {
    export type AsObject = {
        device: string,
        mountpoint: string,
        filesystem: string,
        totalbytes: number,
        usedbytes: number,
        freebytes: number,
        usagepercent: number,
        inodestotal: number,
        inodesused: number,
        inodesfree: number,
        inodesusagepercent: number,
    }
}

export class NetworkMetrics extends jspb.Message { 
    getInterface(): string;
    setInterface(value: string): NetworkMetrics;
    getBytesreceived(): number;
    setBytesreceived(value: number): NetworkMetrics;
    getBytessent(): number;
    setBytessent(value: number): NetworkMetrics;
    getPacketsreceived(): number;
    setPacketsreceived(value: number): NetworkMetrics;
    getPacketssent(): number;
    setPacketssent(value: number): NetworkMetrics;
    getErrorsin(): number;
    setErrorsin(value: number): NetworkMetrics;
    getErrorsout(): number;
    setErrorsout(value: number): NetworkMetrics;
    getDropsin(): number;
    setDropsin(value: number): NetworkMetrics;
    getDropsout(): number;
    setDropsout(value: number): NetworkMetrics;
    getReceiverate(): number;
    setReceiverate(value: number): NetworkMetrics;
    getTransmitrate(): number;
    setTransmitrate(value: number): NetworkMetrics;
    clearIpaddressesList(): void;
    getIpaddressesList(): Array<string>;
    setIpaddressesList(value: Array<string>): NetworkMetrics;
    addIpaddresses(value: string, index?: number): string;
    getMacaddress(): string;
    setMacaddress(value: string): NetworkMetrics;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetworkMetrics.AsObject;
    static toObject(includeInstance: boolean, msg: NetworkMetrics): NetworkMetrics.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetworkMetrics, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetworkMetrics;
    static deserializeBinaryFromReader(message: NetworkMetrics, reader: jspb.BinaryReader): NetworkMetrics;
}

export namespace NetworkMetrics {
    export type AsObject = {
        pb_interface: string,
        bytesreceived: number,
        bytessent: number,
        packetsreceived: number,
        packetssent: number,
        errorsin: number,
        errorsout: number,
        dropsin: number,
        dropsout: number,
        receiverate: number,
        transmitrate: number,
        ipaddressesList: Array<string>,
        macaddress: string,
    }
}

export class IOMetrics extends jspb.Message { 
    getTotalreads(): number;
    setTotalreads(value: number): IOMetrics;
    getTotalwrites(): number;
    setTotalwrites(value: number): IOMetrics;
    getReadbytes(): number;
    setReadbytes(value: number): IOMetrics;
    getWritebytes(): number;
    setWritebytes(value: number): IOMetrics;
    getReadrate(): number;
    setReadrate(value: number): IOMetrics;
    getWriterate(): number;
    setWriterate(value: number): IOMetrics;
    clearDiskioList(): void;
    getDiskioList(): Array<DiskIOMetrics>;
    setDiskioList(value: Array<DiskIOMetrics>): IOMetrics;
    addDiskio(value?: DiskIOMetrics, index?: number): DiskIOMetrics;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IOMetrics.AsObject;
    static toObject(includeInstance: boolean, msg: IOMetrics): IOMetrics.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IOMetrics, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IOMetrics;
    static deserializeBinaryFromReader(message: IOMetrics, reader: jspb.BinaryReader): IOMetrics;
}

export namespace IOMetrics {
    export type AsObject = {
        totalreads: number,
        totalwrites: number,
        readbytes: number,
        writebytes: number,
        readrate: number,
        writerate: number,
        diskioList: Array<DiskIOMetrics.AsObject>,
    }
}

export class DiskIOMetrics extends jspb.Message { 
    getDevice(): string;
    setDevice(value: string): DiskIOMetrics;
    getReadscompleted(): number;
    setReadscompleted(value: number): DiskIOMetrics;
    getWritescompleted(): number;
    setWritescompleted(value: number): DiskIOMetrics;
    getReadbytes(): number;
    setReadbytes(value: number): DiskIOMetrics;
    getWritebytes(): number;
    setWritebytes(value: number): DiskIOMetrics;
    getReadtime(): number;
    setReadtime(value: number): DiskIOMetrics;
    getWritetime(): number;
    setWritetime(value: number): DiskIOMetrics;
    getIotime(): number;
    setIotime(value: number): DiskIOMetrics;
    getUtilization(): number;
    setUtilization(value: number): DiskIOMetrics;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DiskIOMetrics.AsObject;
    static toObject(includeInstance: boolean, msg: DiskIOMetrics): DiskIOMetrics.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DiskIOMetrics, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DiskIOMetrics;
    static deserializeBinaryFromReader(message: DiskIOMetrics, reader: jspb.BinaryReader): DiskIOMetrics;
}

export namespace DiskIOMetrics {
    export type AsObject = {
        device: string,
        readscompleted: number,
        writescompleted: number,
        readbytes: number,
        writebytes: number,
        readtime: number,
        writetime: number,
        iotime: number,
        utilization: number,
    }
}

export class ProcessMetrics extends jspb.Message { 
    getTotalprocesses(): number;
    setTotalprocesses(value: number): ProcessMetrics;
    getRunningprocesses(): number;
    setRunningprocesses(value: number): ProcessMetrics;
    getSleepingprocesses(): number;
    setSleepingprocesses(value: number): ProcessMetrics;
    getStoppedprocesses(): number;
    setStoppedprocesses(value: number): ProcessMetrics;
    getZombieprocesses(): number;
    setZombieprocesses(value: number): ProcessMetrics;
    getTotalthreads(): number;
    setTotalthreads(value: number): ProcessMetrics;
    clearTopbycpuList(): void;
    getTopbycpuList(): Array<ProcessInfo>;
    setTopbycpuList(value: Array<ProcessInfo>): ProcessMetrics;
    addTopbycpu(value?: ProcessInfo, index?: number): ProcessInfo;
    clearTopbymemoryList(): void;
    getTopbymemoryList(): Array<ProcessInfo>;
    setTopbymemoryList(value: Array<ProcessInfo>): ProcessMetrics;
    addTopbymemory(value?: ProcessInfo, index?: number): ProcessInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProcessMetrics.AsObject;
    static toObject(includeInstance: boolean, msg: ProcessMetrics): ProcessMetrics.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProcessMetrics, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProcessMetrics;
    static deserializeBinaryFromReader(message: ProcessMetrics, reader: jspb.BinaryReader): ProcessMetrics;
}

export namespace ProcessMetrics {
    export type AsObject = {
        totalprocesses: number,
        runningprocesses: number,
        sleepingprocesses: number,
        stoppedprocesses: number,
        zombieprocesses: number,
        totalthreads: number,
        topbycpuList: Array<ProcessInfo.AsObject>,
        topbymemoryList: Array<ProcessInfo.AsObject>,
    }
}

export class ProcessInfo extends jspb.Message { 
    getPid(): number;
    setPid(value: number): ProcessInfo;
    getPpid(): number;
    setPpid(value: number): ProcessInfo;
    getName(): string;
    setName(value: string): ProcessInfo;
    getCommand(): string;
    setCommand(value: string): ProcessInfo;
    getCpupercent(): number;
    setCpupercent(value: number): ProcessInfo;
    getMemorypercent(): number;
    setMemorypercent(value: number): ProcessInfo;
    getMemorybytes(): number;
    setMemorybytes(value: number): ProcessInfo;
    getStatus(): string;
    setStatus(value: string): ProcessInfo;
    getStarttime(): string;
    setStarttime(value: string): ProcessInfo;
    getUser(): string;
    setUser(value: string): ProcessInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProcessInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ProcessInfo): ProcessInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProcessInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProcessInfo;
    static deserializeBinaryFromReader(message: ProcessInfo, reader: jspb.BinaryReader): ProcessInfo;
}

export namespace ProcessInfo {
    export type AsObject = {
        pid: number,
        ppid: number,
        name: string,
        command: string,
        cpupercent: number,
        memorypercent: number,
        memorybytes: number,
        status: string,
        starttime: string,
        user: string,
    }
}

export class CloudInfo extends jspb.Message { 
    getProvider(): string;
    setProvider(value: string): CloudInfo;
    getRegion(): string;
    setRegion(value: string): CloudInfo;
    getZone(): string;
    setZone(value: string): CloudInfo;
    getInstanceid(): string;
    setInstanceid(value: string): CloudInfo;
    getInstancetype(): string;
    setInstancetype(value: string): CloudInfo;
    getHypervisortype(): string;
    setHypervisortype(value: string): CloudInfo;

    getMetadataMap(): jspb.Map<string, string>;
    clearMetadataMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CloudInfo.AsObject;
    static toObject(includeInstance: boolean, msg: CloudInfo): CloudInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CloudInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CloudInfo;
    static deserializeBinaryFromReader(message: CloudInfo, reader: jspb.BinaryReader): CloudInfo;
}

export namespace CloudInfo {
    export type AsObject = {
        provider: string,
        region: string,
        zone: string,
        instanceid: string,
        instancetype: string,
        hypervisortype: string,

        metadataMap: Array<[string, string]>,
    }
}

export class ServerVersionInfo extends jspb.Message { 
    getVersion(): string;
    setVersion(value: string): ServerVersionInfo;
    getGitCommit(): string;
    setGitCommit(value: string): ServerVersionInfo;
    getGitTag(): string;
    setGitTag(value: string): ServerVersionInfo;
    getBuildDate(): string;
    setBuildDate(value: string): ServerVersionInfo;
    getComponent(): string;
    setComponent(value: string): ServerVersionInfo;
    getGoVersion(): string;
    setGoVersion(value: string): ServerVersionInfo;
    getPlatform(): string;
    setPlatform(value: string): ServerVersionInfo;
    getProtoCommit(): string;
    setProtoCommit(value: string): ServerVersionInfo;
    getProtoTag(): string;
    setProtoTag(value: string): ServerVersionInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServerVersionInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ServerVersionInfo): ServerVersionInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServerVersionInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServerVersionInfo;
    static deserializeBinaryFromReader(message: ServerVersionInfo, reader: jspb.BinaryReader): ServerVersionInfo;
}

export namespace ServerVersionInfo {
    export type AsObject = {
        version: string,
        gitCommit: string,
        gitTag: string,
        buildDate: string,
        component: string,
        goVersion: string,
        platform: string,
        protoCommit: string,
        protoTag: string,
    }
}

export class RuntimesRes extends jspb.Message { 
    clearRuntimesList(): void;
    getRuntimesList(): Array<RuntimeInfo>;
    setRuntimesList(value: Array<RuntimeInfo>): RuntimesRes;
    addRuntimes(value?: RuntimeInfo, index?: number): RuntimeInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RuntimesRes.AsObject;
    static toObject(includeInstance: boolean, msg: RuntimesRes): RuntimesRes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RuntimesRes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RuntimesRes;
    static deserializeBinaryFromReader(message: RuntimesRes, reader: jspb.BinaryReader): RuntimesRes;
}

export namespace RuntimesRes {
    export type AsObject = {
        runtimesList: Array<RuntimeInfo.AsObject>,
    }
}

export class RuntimeInfo extends jspb.Message { 
    getName(): string;
    setName(value: string): RuntimeInfo;
    getLanguage(): string;
    setLanguage(value: string): RuntimeInfo;
    getVersion(): string;
    setVersion(value: string): RuntimeInfo;
    getDescription(): string;
    setDescription(value: string): RuntimeInfo;
    getSizebytes(): number;
    setSizebytes(value: number): RuntimeInfo;
    clearPackagesList(): void;
    getPackagesList(): Array<string>;
    setPackagesList(value: Array<string>): RuntimeInfo;
    addPackages(value: string, index?: number): string;
    getAvailable(): boolean;
    setAvailable(value: boolean): RuntimeInfo;

    hasRequirements(): boolean;
    clearRequirements(): void;
    getRequirements(): RuntimeRequirements | undefined;
    setRequirements(value?: RuntimeRequirements): RuntimeInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RuntimeInfo.AsObject;
    static toObject(includeInstance: boolean, msg: RuntimeInfo): RuntimeInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RuntimeInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RuntimeInfo;
    static deserializeBinaryFromReader(message: RuntimeInfo, reader: jspb.BinaryReader): RuntimeInfo;
}

export namespace RuntimeInfo {
    export type AsObject = {
        name: string,
        language: string,
        version: string,
        description: string,
        sizebytes: number,
        packagesList: Array<string>,
        available: boolean,
        requirements?: RuntimeRequirements.AsObject,
    }
}

export class RuntimeRequirements extends jspb.Message { 
    clearArchitecturesList(): void;
    getArchitecturesList(): Array<string>;
    setArchitecturesList(value: Array<string>): RuntimeRequirements;
    addArchitectures(value: string, index?: number): string;
    getGpu(): boolean;
    setGpu(value: boolean): RuntimeRequirements;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RuntimeRequirements.AsObject;
    static toObject(includeInstance: boolean, msg: RuntimeRequirements): RuntimeRequirements.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RuntimeRequirements, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RuntimeRequirements;
    static deserializeBinaryFromReader(message: RuntimeRequirements, reader: jspb.BinaryReader): RuntimeRequirements;
}

export namespace RuntimeRequirements {
    export type AsObject = {
        architecturesList: Array<string>,
        gpu: boolean,
    }
}

export class RuntimeInfoReq extends jspb.Message { 
    getRuntime(): string;
    setRuntime(value: string): RuntimeInfoReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RuntimeInfoReq.AsObject;
    static toObject(includeInstance: boolean, msg: RuntimeInfoReq): RuntimeInfoReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RuntimeInfoReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RuntimeInfoReq;
    static deserializeBinaryFromReader(message: RuntimeInfoReq, reader: jspb.BinaryReader): RuntimeInfoReq;
}

export namespace RuntimeInfoReq {
    export type AsObject = {
        runtime: string,
    }
}

export class RuntimeInfoRes extends jspb.Message { 

    hasRuntime(): boolean;
    clearRuntime(): void;
    getRuntime(): RuntimeInfo | undefined;
    setRuntime(value?: RuntimeInfo): RuntimeInfoRes;
    getFound(): boolean;
    setFound(value: boolean): RuntimeInfoRes;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RuntimeInfoRes.AsObject;
    static toObject(includeInstance: boolean, msg: RuntimeInfoRes): RuntimeInfoRes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RuntimeInfoRes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RuntimeInfoRes;
    static deserializeBinaryFromReader(message: RuntimeInfoRes, reader: jspb.BinaryReader): RuntimeInfoRes;
}

export namespace RuntimeInfoRes {
    export type AsObject = {
        runtime?: RuntimeInfo.AsObject,
        found: boolean,
    }
}

export class RuntimeTestReq extends jspb.Message { 
    getRuntime(): string;
    setRuntime(value: string): RuntimeTestReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RuntimeTestReq.AsObject;
    static toObject(includeInstance: boolean, msg: RuntimeTestReq): RuntimeTestReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RuntimeTestReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RuntimeTestReq;
    static deserializeBinaryFromReader(message: RuntimeTestReq, reader: jspb.BinaryReader): RuntimeTestReq;
}

export namespace RuntimeTestReq {
    export type AsObject = {
        runtime: string,
    }
}

export class RuntimeTestRes extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): RuntimeTestRes;
    getOutput(): string;
    setOutput(value: string): RuntimeTestRes;
    getError(): string;
    setError(value: string): RuntimeTestRes;
    getExitcode(): number;
    setExitcode(value: number): RuntimeTestRes;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RuntimeTestRes.AsObject;
    static toObject(includeInstance: boolean, msg: RuntimeTestRes): RuntimeTestRes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RuntimeTestRes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RuntimeTestRes;
    static deserializeBinaryFromReader(message: RuntimeTestRes, reader: jspb.BinaryReader): RuntimeTestRes;
}

export namespace RuntimeTestRes {
    export type AsObject = {
        success: boolean,
        output: string,
        error: string,
        exitcode: number,
    }
}

export class RunJobRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): RunJobRequest;
    getCommand(): string;
    setCommand(value: string): RunJobRequest;
    clearArgsList(): void;
    getArgsList(): Array<string>;
    setArgsList(value: Array<string>): RunJobRequest;
    addArgs(value: string, index?: number): string;
    getMaxcpu(): number;
    setMaxcpu(value: number): RunJobRequest;
    getCpucores(): string;
    setCpucores(value: string): RunJobRequest;
    getMaxmemory(): number;
    setMaxmemory(value: number): RunJobRequest;
    getMaxiobps(): number;
    setMaxiobps(value: number): RunJobRequest;
    clearUploadsList(): void;
    getUploadsList(): Array<FileUpload>;
    setUploadsList(value: Array<FileUpload>): RunJobRequest;
    addUploads(value?: FileUpload, index?: number): FileUpload;
    getSchedule(): string;
    setSchedule(value: string): RunJobRequest;
    getNetwork(): string;
    setNetwork(value: string): RunJobRequest;
    clearVolumesList(): void;
    getVolumesList(): Array<string>;
    setVolumesList(value: Array<string>): RunJobRequest;
    addVolumes(value: string, index?: number): string;
    getRuntime(): string;
    setRuntime(value: string): RunJobRequest;
    getWorkdir(): string;
    setWorkdir(value: string): RunJobRequest;

    getEnvironmentMap(): jspb.Map<string, string>;
    clearEnvironmentMap(): void;

    getSecretEnvironmentMap(): jspb.Map<string, string>;
    clearSecretEnvironmentMap(): void;
    getGpuCount(): number;
    setGpuCount(value: number): RunJobRequest;
    getGpuMemoryMb(): number;
    setGpuMemoryMb(value: number): RunJobRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RunJobRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RunJobRequest): RunJobRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RunJobRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RunJobRequest;
    static deserializeBinaryFromReader(message: RunJobRequest, reader: jspb.BinaryReader): RunJobRequest;
}

export namespace RunJobRequest {
    export type AsObject = {
        name: string,
        command: string,
        argsList: Array<string>,
        maxcpu: number,
        cpucores: string,
        maxmemory: number,
        maxiobps: number,
        uploadsList: Array<FileUpload.AsObject>,
        schedule: string,
        network: string,
        volumesList: Array<string>,
        runtime: string,
        workdir: string,

        environmentMap: Array<[string, string]>,

        secretEnvironmentMap: Array<[string, string]>,
        gpuCount: number,
        gpuMemoryMb: number,
    }
}

export class RunJobResponse extends jspb.Message { 
    getJobuuid(): string;
    setJobuuid(value: string): RunJobResponse;
    getStatus(): string;
    setStatus(value: string): RunJobResponse;
    getCommand(): string;
    setCommand(value: string): RunJobResponse;
    clearArgsList(): void;
    getArgsList(): Array<string>;
    setArgsList(value: Array<string>): RunJobResponse;
    addArgs(value: string, index?: number): string;
    getMaxcpu(): number;
    setMaxcpu(value: number): RunJobResponse;
    getCpucores(): string;
    setCpucores(value: string): RunJobResponse;
    getMaxmemory(): number;
    setMaxmemory(value: number): RunJobResponse;
    getMaxiobps(): number;
    setMaxiobps(value: number): RunJobResponse;
    getStarttime(): string;
    setStarttime(value: string): RunJobResponse;
    getEndtime(): string;
    setEndtime(value: string): RunJobResponse;
    getExitcode(): number;
    setExitcode(value: number): RunJobResponse;
    getScheduledtime(): string;
    setScheduledtime(value: string): RunJobResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RunJobResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RunJobResponse): RunJobResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RunJobResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RunJobResponse;
    static deserializeBinaryFromReader(message: RunJobResponse, reader: jspb.BinaryReader): RunJobResponse;
}

export namespace RunJobResponse {
    export type AsObject = {
        jobuuid: string,
        status: string,
        command: string,
        argsList: Array<string>,
        maxcpu: number,
        cpucores: string,
        maxmemory: number,
        maxiobps: number,
        starttime: string,
        endtime: string,
        exitcode: number,
        scheduledtime: string,
    }
}

export class Timestamp extends jspb.Message { 
    getSeconds(): number;
    setSeconds(value: number): Timestamp;
    getNanos(): number;
    setNanos(value: number): Timestamp;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Timestamp.AsObject;
    static toObject(includeInstance: boolean, msg: Timestamp): Timestamp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Timestamp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Timestamp;
    static deserializeBinaryFromReader(message: Timestamp, reader: jspb.BinaryReader): Timestamp;
}

export namespace Timestamp {
    export type AsObject = {
        seconds: number,
        nanos: number,
    }
}

export class RuntimeRemoveReq extends jspb.Message { 
    getRuntime(): string;
    setRuntime(value: string): RuntimeRemoveReq;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RuntimeRemoveReq.AsObject;
    static toObject(includeInstance: boolean, msg: RuntimeRemoveReq): RuntimeRemoveReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RuntimeRemoveReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RuntimeRemoveReq;
    static deserializeBinaryFromReader(message: RuntimeRemoveReq, reader: jspb.BinaryReader): RuntimeRemoveReq;
}

export namespace RuntimeRemoveReq {
    export type AsObject = {
        runtime: string,
    }
}

export class RuntimeRemoveRes extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): RuntimeRemoveRes;
    getMessage(): string;
    setMessage(value: string): RuntimeRemoveRes;
    getFreedspacebytes(): number;
    setFreedspacebytes(value: number): RuntimeRemoveRes;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RuntimeRemoveRes.AsObject;
    static toObject(includeInstance: boolean, msg: RuntimeRemoveRes): RuntimeRemoveRes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RuntimeRemoveRes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RuntimeRemoveRes;
    static deserializeBinaryFromReader(message: RuntimeRemoveRes, reader: jspb.BinaryReader): RuntimeRemoveRes;
}

export namespace RuntimeRemoveRes {
    export type AsObject = {
        success: boolean,
        message: string,
        freedspacebytes: number,
    }
}

export class StreamJobMetricsRequest extends jspb.Message { 
    getJobUuid(): string;
    setJobUuid(value: string): StreamJobMetricsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamJobMetricsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StreamJobMetricsRequest): StreamJobMetricsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamJobMetricsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamJobMetricsRequest;
    static deserializeBinaryFromReader(message: StreamJobMetricsRequest, reader: jspb.BinaryReader): StreamJobMetricsRequest;
}

export namespace StreamJobMetricsRequest {
    export type AsObject = {
        jobUuid: string,
    }
}

export class GetJobMetricsRequest extends jspb.Message { 
    getJobUuid(): string;
    setJobUuid(value: string): GetJobMetricsRequest;
    getStartTime(): number;
    setStartTime(value: number): GetJobMetricsRequest;
    getEndTime(): number;
    setEndTime(value: number): GetJobMetricsRequest;
    getLimit(): number;
    setLimit(value: number): GetJobMetricsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetJobMetricsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetJobMetricsRequest): GetJobMetricsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetJobMetricsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetJobMetricsRequest;
    static deserializeBinaryFromReader(message: GetJobMetricsRequest, reader: jspb.BinaryReader): GetJobMetricsRequest;
}

export namespace GetJobMetricsRequest {
    export type AsObject = {
        jobUuid: string,
        startTime: number,
        endTime: number,
        limit: number,
    }
}

export class JobMetricsEvent extends jspb.Message { 
    getTimestamp(): number;
    setTimestamp(value: number): JobMetricsEvent;
    getJobId(): string;
    setJobId(value: string): JobMetricsEvent;
    getCpuPercent(): number;
    setCpuPercent(value: number): JobMetricsEvent;
    getMemoryBytes(): number;
    setMemoryBytes(value: number): JobMetricsEvent;
    getMemoryLimit(): number;
    setMemoryLimit(value: number): JobMetricsEvent;
    getDiskReadBytes(): number;
    setDiskReadBytes(value: number): JobMetricsEvent;
    getDiskWriteBytes(): number;
    setDiskWriteBytes(value: number): JobMetricsEvent;
    getNetRecvBytes(): number;
    setNetRecvBytes(value: number): JobMetricsEvent;
    getNetSentBytes(): number;
    setNetSentBytes(value: number): JobMetricsEvent;
    getGpuPercent(): number;
    setGpuPercent(value: number): JobMetricsEvent;
    getGpuMemoryBytes(): number;
    setGpuMemoryBytes(value: number): JobMetricsEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JobMetricsEvent.AsObject;
    static toObject(includeInstance: boolean, msg: JobMetricsEvent): JobMetricsEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JobMetricsEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JobMetricsEvent;
    static deserializeBinaryFromReader(message: JobMetricsEvent, reader: jspb.BinaryReader): JobMetricsEvent;
}

export namespace JobMetricsEvent {
    export type AsObject = {
        timestamp: number,
        jobId: string,
        cpuPercent: number,
        memoryBytes: number,
        memoryLimit: number,
        diskReadBytes: number,
        diskWriteBytes: number,
        netRecvBytes: number,
        netSentBytes: number,
        gpuPercent: number,
        gpuMemoryBytes: number,
    }
}

export class StreamJobTelematicsRequest extends jspb.Message { 
    getJobUuid(): string;
    setJobUuid(value: string): StreamJobTelematicsRequest;
    clearTypesList(): void;
    getTypesList(): Array<string>;
    setTypesList(value: Array<string>): StreamJobTelematicsRequest;
    addTypes(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamJobTelematicsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StreamJobTelematicsRequest): StreamJobTelematicsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamJobTelematicsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamJobTelematicsRequest;
    static deserializeBinaryFromReader(message: StreamJobTelematicsRequest, reader: jspb.BinaryReader): StreamJobTelematicsRequest;
}

export namespace StreamJobTelematicsRequest {
    export type AsObject = {
        jobUuid: string,
        typesList: Array<string>,
    }
}

export class GetJobTelematicsRequest extends jspb.Message { 
    getJobUuid(): string;
    setJobUuid(value: string): GetJobTelematicsRequest;
    clearTypesList(): void;
    getTypesList(): Array<string>;
    setTypesList(value: Array<string>): GetJobTelematicsRequest;
    addTypes(value: string, index?: number): string;
    getStartTime(): number;
    setStartTime(value: number): GetJobTelematicsRequest;
    getEndTime(): number;
    setEndTime(value: number): GetJobTelematicsRequest;
    getLimit(): number;
    setLimit(value: number): GetJobTelematicsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetJobTelematicsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetJobTelematicsRequest): GetJobTelematicsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetJobTelematicsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetJobTelematicsRequest;
    static deserializeBinaryFromReader(message: GetJobTelematicsRequest, reader: jspb.BinaryReader): GetJobTelematicsRequest;
}

export namespace GetJobTelematicsRequest {
    export type AsObject = {
        jobUuid: string,
        typesList: Array<string>,
        startTime: number,
        endTime: number,
        limit: number,
    }
}

export class TelematicsEvent extends jspb.Message { 
    getTimestamp(): number;
    setTimestamp(value: number): TelematicsEvent;
    getJobId(): string;
    setJobId(value: string): TelematicsEvent;
    getType(): string;
    setType(value: string): TelematicsEvent;

    hasExec(): boolean;
    clearExec(): void;
    getExec(): TelematicsExecData | undefined;
    setExec(value?: TelematicsExecData): TelematicsEvent;

    hasConnect(): boolean;
    clearConnect(): void;
    getConnect(): TelematicsConnectData | undefined;
    setConnect(value?: TelematicsConnectData): TelematicsEvent;

    hasAccept(): boolean;
    clearAccept(): void;
    getAccept(): TelematicsAcceptData | undefined;
    setAccept(value?: TelematicsAcceptData): TelematicsEvent;

    hasFile(): boolean;
    clearFile(): void;
    getFile(): TelematicsFileData | undefined;
    setFile(value?: TelematicsFileData): TelematicsEvent;

    hasMmap(): boolean;
    clearMmap(): void;
    getMmap(): TelematicsMmapData | undefined;
    setMmap(value?: TelematicsMmapData): TelematicsEvent;

    hasMprotect(): boolean;
    clearMprotect(): void;
    getMprotect(): TelematicsMprotectData | undefined;
    setMprotect(value?: TelematicsMprotectData): TelematicsEvent;

    hasSocketData(): boolean;
    clearSocketData(): void;
    getSocketData(): TelematicsSocketDataData | undefined;
    setSocketData(value?: TelematicsSocketDataData): TelematicsEvent;

    getDataCase(): TelematicsEvent.DataCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TelematicsEvent.AsObject;
    static toObject(includeInstance: boolean, msg: TelematicsEvent): TelematicsEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TelematicsEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TelematicsEvent;
    static deserializeBinaryFromReader(message: TelematicsEvent, reader: jspb.BinaryReader): TelematicsEvent;
}

export namespace TelematicsEvent {
    export type AsObject = {
        timestamp: number,
        jobId: string,
        type: string,
        exec?: TelematicsExecData.AsObject,
        connect?: TelematicsConnectData.AsObject,
        accept?: TelematicsAcceptData.AsObject,
        file?: TelematicsFileData.AsObject,
        mmap?: TelematicsMmapData.AsObject,
        mprotect?: TelematicsMprotectData.AsObject,
        socketData?: TelematicsSocketDataData.AsObject,
    }

    export enum DataCase {
        DATA_NOT_SET = 0,
        EXEC = 10,
        CONNECT = 11,
        ACCEPT = 12,
        FILE = 13,
        MMAP = 14,
        MPROTECT = 15,
        SOCKET_DATA = 16,
    }

}

export class TelematicsExecData extends jspb.Message { 
    getPid(): number;
    setPid(value: number): TelematicsExecData;
    getPpid(): number;
    setPpid(value: number): TelematicsExecData;
    getBinary(): string;
    setBinary(value: string): TelematicsExecData;
    clearArgsList(): void;
    getArgsList(): Array<string>;
    setArgsList(value: Array<string>): TelematicsExecData;
    addArgs(value: string, index?: number): string;
    getExitCode(): number;
    setExitCode(value: number): TelematicsExecData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TelematicsExecData.AsObject;
    static toObject(includeInstance: boolean, msg: TelematicsExecData): TelematicsExecData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TelematicsExecData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TelematicsExecData;
    static deserializeBinaryFromReader(message: TelematicsExecData, reader: jspb.BinaryReader): TelematicsExecData;
}

export namespace TelematicsExecData {
    export type AsObject = {
        pid: number,
        ppid: number,
        binary: string,
        argsList: Array<string>,
        exitCode: number,
    }
}

export class TelematicsConnectData extends jspb.Message { 
    getPid(): number;
    setPid(value: number): TelematicsConnectData;
    getDstAddr(): string;
    setDstAddr(value: string): TelematicsConnectData;
    getDstPort(): number;
    setDstPort(value: number): TelematicsConnectData;
    getProtocol(): string;
    setProtocol(value: string): TelematicsConnectData;
    getSrcAddr(): string;
    setSrcAddr(value: string): TelematicsConnectData;
    getSrcPort(): number;
    setSrcPort(value: number): TelematicsConnectData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TelematicsConnectData.AsObject;
    static toObject(includeInstance: boolean, msg: TelematicsConnectData): TelematicsConnectData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TelematicsConnectData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TelematicsConnectData;
    static deserializeBinaryFromReader(message: TelematicsConnectData, reader: jspb.BinaryReader): TelematicsConnectData;
}

export namespace TelematicsConnectData {
    export type AsObject = {
        pid: number,
        dstAddr: string,
        dstPort: number,
        protocol: string,
        srcAddr: string,
        srcPort: number,
    }
}

export class TelematicsAcceptData extends jspb.Message { 
    getPid(): number;
    setPid(value: number): TelematicsAcceptData;
    getSrcAddr(): string;
    setSrcAddr(value: string): TelematicsAcceptData;
    getSrcPort(): number;
    setSrcPort(value: number): TelematicsAcceptData;
    getDstAddr(): string;
    setDstAddr(value: string): TelematicsAcceptData;
    getDstPort(): number;
    setDstPort(value: number): TelematicsAcceptData;
    getProtocol(): string;
    setProtocol(value: string): TelematicsAcceptData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TelematicsAcceptData.AsObject;
    static toObject(includeInstance: boolean, msg: TelematicsAcceptData): TelematicsAcceptData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TelematicsAcceptData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TelematicsAcceptData;
    static deserializeBinaryFromReader(message: TelematicsAcceptData, reader: jspb.BinaryReader): TelematicsAcceptData;
}

export namespace TelematicsAcceptData {
    export type AsObject = {
        pid: number,
        srcAddr: string,
        srcPort: number,
        dstAddr: string,
        dstPort: number,
        protocol: string,
    }
}

export class TelematicsFileData extends jspb.Message { 
    getPid(): number;
    setPid(value: number): TelematicsFileData;
    getPath(): string;
    setPath(value: string): TelematicsFileData;
    getOperation(): string;
    setOperation(value: string): TelematicsFileData;
    getBytes(): number;
    setBytes(value: number): TelematicsFileData;
    getFlags(): number;
    setFlags(value: number): TelematicsFileData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TelematicsFileData.AsObject;
    static toObject(includeInstance: boolean, msg: TelematicsFileData): TelematicsFileData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TelematicsFileData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TelematicsFileData;
    static deserializeBinaryFromReader(message: TelematicsFileData, reader: jspb.BinaryReader): TelematicsFileData;
}

export namespace TelematicsFileData {
    export type AsObject = {
        pid: number,
        path: string,
        operation: string,
        bytes: number,
        flags: number,
    }
}

export class TelematicsMmapData extends jspb.Message { 
    getPid(): number;
    setPid(value: number): TelematicsMmapData;
    getAddr(): number;
    setAddr(value: number): TelematicsMmapData;
    getLength(): number;
    setLength(value: number): TelematicsMmapData;
    getProt(): number;
    setProt(value: number): TelematicsMmapData;
    getFlags(): number;
    setFlags(value: number): TelematicsMmapData;
    getFilePath(): string;
    setFilePath(value: string): TelematicsMmapData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TelematicsMmapData.AsObject;
    static toObject(includeInstance: boolean, msg: TelematicsMmapData): TelematicsMmapData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TelematicsMmapData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TelematicsMmapData;
    static deserializeBinaryFromReader(message: TelematicsMmapData, reader: jspb.BinaryReader): TelematicsMmapData;
}

export namespace TelematicsMmapData {
    export type AsObject = {
        pid: number,
        addr: number,
        length: number,
        prot: number,
        flags: number,
        filePath: string,
    }
}

export class TelematicsMprotectData extends jspb.Message { 
    getPid(): number;
    setPid(value: number): TelematicsMprotectData;
    getAddr(): number;
    setAddr(value: number): TelematicsMprotectData;
    getLength(): number;
    setLength(value: number): TelematicsMprotectData;
    getProt(): number;
    setProt(value: number): TelematicsMprotectData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TelematicsMprotectData.AsObject;
    static toObject(includeInstance: boolean, msg: TelematicsMprotectData): TelematicsMprotectData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TelematicsMprotectData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TelematicsMprotectData;
    static deserializeBinaryFromReader(message: TelematicsMprotectData, reader: jspb.BinaryReader): TelematicsMprotectData;
}

export namespace TelematicsMprotectData {
    export type AsObject = {
        pid: number,
        addr: number,
        length: number,
        prot: number,
    }
}

export class TelematicsSocketDataData extends jspb.Message { 
    getPid(): number;
    setPid(value: number): TelematicsSocketDataData;
    getDirection(): string;
    setDirection(value: string): TelematicsSocketDataData;
    getDstAddr(): string;
    setDstAddr(value: string): TelematicsSocketDataData;
    getDstPort(): number;
    setDstPort(value: number): TelematicsSocketDataData;
    getSrcAddr(): string;
    setSrcAddr(value: string): TelematicsSocketDataData;
    getSrcPort(): number;
    setSrcPort(value: number): TelematicsSocketDataData;
    getProtocol(): string;
    setProtocol(value: string): TelematicsSocketDataData;
    getBytes(): number;
    setBytes(value: number): TelematicsSocketDataData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TelematicsSocketDataData.AsObject;
    static toObject(includeInstance: boolean, msg: TelematicsSocketDataData): TelematicsSocketDataData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TelematicsSocketDataData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TelematicsSocketDataData;
    static deserializeBinaryFromReader(message: TelematicsSocketDataData, reader: jspb.BinaryReader): TelematicsSocketDataData;
}

export namespace TelematicsSocketDataData {
    export type AsObject = {
        pid: number,
        direction: string,
        dstAddr: string,
        dstPort: number,
        srcAddr: string,
        srcPort: number,
        protocol: string,
        bytes: number,
    }
}
