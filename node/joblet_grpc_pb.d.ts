// package: joblet
// file: joblet.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as joblet_pb from "./joblet_pb";

interface IJobServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    runJob: IJobServiceService_IRunJob;
    getJobStatus: IJobServiceService_IGetJobStatus;
    stopJob: IJobServiceService_IStopJob;
    cancelJob: IJobServiceService_ICancelJob;
    deleteJob: IJobServiceService_IDeleteJob;
    deleteAllJobs: IJobServiceService_IDeleteAllJobs;
    getJobLogs: IJobServiceService_IGetJobLogs;
    listJobs: IJobServiceService_IListJobs;
    streamJobTelemetry: IJobServiceService_IStreamJobTelemetry;
    getJobTelemetry: IJobServiceService_IGetJobTelemetry;
}

interface IJobServiceService_IRunJob extends grpc.MethodDefinition<joblet_pb.RunJobRequest, joblet_pb.RunJobResponse> {
    path: "/joblet.JobService/RunJob";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<joblet_pb.RunJobRequest>;
    requestDeserialize: grpc.deserialize<joblet_pb.RunJobRequest>;
    responseSerialize: grpc.serialize<joblet_pb.RunJobResponse>;
    responseDeserialize: grpc.deserialize<joblet_pb.RunJobResponse>;
}
interface IJobServiceService_IGetJobStatus extends grpc.MethodDefinition<joblet_pb.GetJobStatusReq, joblet_pb.GetJobStatusRes> {
    path: "/joblet.JobService/GetJobStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<joblet_pb.GetJobStatusReq>;
    requestDeserialize: grpc.deserialize<joblet_pb.GetJobStatusReq>;
    responseSerialize: grpc.serialize<joblet_pb.GetJobStatusRes>;
    responseDeserialize: grpc.deserialize<joblet_pb.GetJobStatusRes>;
}
interface IJobServiceService_IStopJob extends grpc.MethodDefinition<joblet_pb.StopJobReq, joblet_pb.StopJobRes> {
    path: "/joblet.JobService/StopJob";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<joblet_pb.StopJobReq>;
    requestDeserialize: grpc.deserialize<joblet_pb.StopJobReq>;
    responseSerialize: grpc.serialize<joblet_pb.StopJobRes>;
    responseDeserialize: grpc.deserialize<joblet_pb.StopJobRes>;
}
interface IJobServiceService_ICancelJob extends grpc.MethodDefinition<joblet_pb.CancelJobReq, joblet_pb.CancelJobRes> {
    path: "/joblet.JobService/CancelJob";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<joblet_pb.CancelJobReq>;
    requestDeserialize: grpc.deserialize<joblet_pb.CancelJobReq>;
    responseSerialize: grpc.serialize<joblet_pb.CancelJobRes>;
    responseDeserialize: grpc.deserialize<joblet_pb.CancelJobRes>;
}
interface IJobServiceService_IDeleteJob extends grpc.MethodDefinition<joblet_pb.DeleteJobReq, joblet_pb.DeleteJobRes> {
    path: "/joblet.JobService/DeleteJob";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<joblet_pb.DeleteJobReq>;
    requestDeserialize: grpc.deserialize<joblet_pb.DeleteJobReq>;
    responseSerialize: grpc.serialize<joblet_pb.DeleteJobRes>;
    responseDeserialize: grpc.deserialize<joblet_pb.DeleteJobRes>;
}
interface IJobServiceService_IDeleteAllJobs extends grpc.MethodDefinition<joblet_pb.DeleteAllJobsReq, joblet_pb.DeleteAllJobsRes> {
    path: "/joblet.JobService/DeleteAllJobs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<joblet_pb.DeleteAllJobsReq>;
    requestDeserialize: grpc.deserialize<joblet_pb.DeleteAllJobsReq>;
    responseSerialize: grpc.serialize<joblet_pb.DeleteAllJobsRes>;
    responseDeserialize: grpc.deserialize<joblet_pb.DeleteAllJobsRes>;
}
interface IJobServiceService_IGetJobLogs extends grpc.MethodDefinition<joblet_pb.GetJobLogsReq, joblet_pb.DataChunk> {
    path: "/joblet.JobService/GetJobLogs";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<joblet_pb.GetJobLogsReq>;
    requestDeserialize: grpc.deserialize<joblet_pb.GetJobLogsReq>;
    responseSerialize: grpc.serialize<joblet_pb.DataChunk>;
    responseDeserialize: grpc.deserialize<joblet_pb.DataChunk>;
}
interface IJobServiceService_IListJobs extends grpc.MethodDefinition<joblet_pb.EmptyRequest, joblet_pb.Jobs> {
    path: "/joblet.JobService/ListJobs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<joblet_pb.EmptyRequest>;
    requestDeserialize: grpc.deserialize<joblet_pb.EmptyRequest>;
    responseSerialize: grpc.serialize<joblet_pb.Jobs>;
    responseDeserialize: grpc.deserialize<joblet_pb.Jobs>;
}
interface IJobServiceService_IStreamJobTelemetry extends grpc.MethodDefinition<joblet_pb.StreamTelemetryRequest, joblet_pb.TelemetryEvent> {
    path: "/joblet.JobService/StreamJobTelemetry";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<joblet_pb.StreamTelemetryRequest>;
    requestDeserialize: grpc.deserialize<joblet_pb.StreamTelemetryRequest>;
    responseSerialize: grpc.serialize<joblet_pb.TelemetryEvent>;
    responseDeserialize: grpc.deserialize<joblet_pb.TelemetryEvent>;
}
interface IJobServiceService_IGetJobTelemetry extends grpc.MethodDefinition<joblet_pb.GetTelemetryRequest, joblet_pb.TelemetryEvent> {
    path: "/joblet.JobService/GetJobTelemetry";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<joblet_pb.GetTelemetryRequest>;
    requestDeserialize: grpc.deserialize<joblet_pb.GetTelemetryRequest>;
    responseSerialize: grpc.serialize<joblet_pb.TelemetryEvent>;
    responseDeserialize: grpc.deserialize<joblet_pb.TelemetryEvent>;
}

export const JobServiceService: IJobServiceService;

export interface IJobServiceServer extends grpc.UntypedServiceImplementation {
    runJob: grpc.handleUnaryCall<joblet_pb.RunJobRequest, joblet_pb.RunJobResponse>;
    getJobStatus: grpc.handleUnaryCall<joblet_pb.GetJobStatusReq, joblet_pb.GetJobStatusRes>;
    stopJob: grpc.handleUnaryCall<joblet_pb.StopJobReq, joblet_pb.StopJobRes>;
    cancelJob: grpc.handleUnaryCall<joblet_pb.CancelJobReq, joblet_pb.CancelJobRes>;
    deleteJob: grpc.handleUnaryCall<joblet_pb.DeleteJobReq, joblet_pb.DeleteJobRes>;
    deleteAllJobs: grpc.handleUnaryCall<joblet_pb.DeleteAllJobsReq, joblet_pb.DeleteAllJobsRes>;
    getJobLogs: grpc.handleServerStreamingCall<joblet_pb.GetJobLogsReq, joblet_pb.DataChunk>;
    listJobs: grpc.handleUnaryCall<joblet_pb.EmptyRequest, joblet_pb.Jobs>;
    streamJobTelemetry: grpc.handleServerStreamingCall<joblet_pb.StreamTelemetryRequest, joblet_pb.TelemetryEvent>;
    getJobTelemetry: grpc.handleServerStreamingCall<joblet_pb.GetTelemetryRequest, joblet_pb.TelemetryEvent>;
}

export interface IJobServiceClient {
    runJob(request: joblet_pb.RunJobRequest, callback: (error: grpc.ServiceError | null, response: joblet_pb.RunJobResponse) => void): grpc.ClientUnaryCall;
    runJob(request: joblet_pb.RunJobRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: joblet_pb.RunJobResponse) => void): grpc.ClientUnaryCall;
    runJob(request: joblet_pb.RunJobRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: joblet_pb.RunJobResponse) => void): grpc.ClientUnaryCall;
    getJobStatus(request: joblet_pb.GetJobStatusReq, callback: (error: grpc.ServiceError | null, response: joblet_pb.GetJobStatusRes) => void): grpc.ClientUnaryCall;
    getJobStatus(request: joblet_pb.GetJobStatusReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: joblet_pb.GetJobStatusRes) => void): grpc.ClientUnaryCall;
    getJobStatus(request: joblet_pb.GetJobStatusReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: joblet_pb.GetJobStatusRes) => void): grpc.ClientUnaryCall;
    stopJob(request: joblet_pb.StopJobReq, callback: (error: grpc.ServiceError | null, response: joblet_pb.StopJobRes) => void): grpc.ClientUnaryCall;
    stopJob(request: joblet_pb.StopJobReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: joblet_pb.StopJobRes) => void): grpc.ClientUnaryCall;
    stopJob(request: joblet_pb.StopJobReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: joblet_pb.StopJobRes) => void): grpc.ClientUnaryCall;
    cancelJob(request: joblet_pb.CancelJobReq, callback: (error: grpc.ServiceError | null, response: joblet_pb.CancelJobRes) => void): grpc.ClientUnaryCall;
    cancelJob(request: joblet_pb.CancelJobReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: joblet_pb.CancelJobRes) => void): grpc.ClientUnaryCall;
    cancelJob(request: joblet_pb.CancelJobReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: joblet_pb.CancelJobRes) => void): grpc.ClientUnaryCall;
    deleteJob(request: joblet_pb.DeleteJobReq, callback: (error: grpc.ServiceError | null, response: joblet_pb.DeleteJobRes) => void): grpc.ClientUnaryCall;
    deleteJob(request: joblet_pb.DeleteJobReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: joblet_pb.DeleteJobRes) => void): grpc.ClientUnaryCall;
    deleteJob(request: joblet_pb.DeleteJobReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: joblet_pb.DeleteJobRes) => void): grpc.ClientUnaryCall;
    deleteAllJobs(request: joblet_pb.DeleteAllJobsReq, callback: (error: grpc.ServiceError | null, response: joblet_pb.DeleteAllJobsRes) => void): grpc.ClientUnaryCall;
    deleteAllJobs(request: joblet_pb.DeleteAllJobsReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: joblet_pb.DeleteAllJobsRes) => void): grpc.ClientUnaryCall;
    deleteAllJobs(request: joblet_pb.DeleteAllJobsReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: joblet_pb.DeleteAllJobsRes) => void): grpc.ClientUnaryCall;
    getJobLogs(request: joblet_pb.GetJobLogsReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<joblet_pb.DataChunk>;
    getJobLogs(request: joblet_pb.GetJobLogsReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<joblet_pb.DataChunk>;
    listJobs(request: joblet_pb.EmptyRequest, callback: (error: grpc.ServiceError | null, response: joblet_pb.Jobs) => void): grpc.ClientUnaryCall;
    listJobs(request: joblet_pb.EmptyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: joblet_pb.Jobs) => void): grpc.ClientUnaryCall;
    listJobs(request: joblet_pb.EmptyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: joblet_pb.Jobs) => void): grpc.ClientUnaryCall;
    streamJobTelemetry(request: joblet_pb.StreamTelemetryRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<joblet_pb.TelemetryEvent>;
    streamJobTelemetry(request: joblet_pb.StreamTelemetryRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<joblet_pb.TelemetryEvent>;
    getJobTelemetry(request: joblet_pb.GetTelemetryRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<joblet_pb.TelemetryEvent>;
    getJobTelemetry(request: joblet_pb.GetTelemetryRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<joblet_pb.TelemetryEvent>;
}

export class JobServiceClient extends grpc.Client implements IJobServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public runJob(request: joblet_pb.RunJobRequest, callback: (error: grpc.ServiceError | null, response: joblet_pb.RunJobResponse) => void): grpc.ClientUnaryCall;
    public runJob(request: joblet_pb.RunJobRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: joblet_pb.RunJobResponse) => void): grpc.ClientUnaryCall;
    public runJob(request: joblet_pb.RunJobRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: joblet_pb.RunJobResponse) => void): grpc.ClientUnaryCall;
    public getJobStatus(request: joblet_pb.GetJobStatusReq, callback: (error: grpc.ServiceError | null, response: joblet_pb.GetJobStatusRes) => void): grpc.ClientUnaryCall;
    public getJobStatus(request: joblet_pb.GetJobStatusReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: joblet_pb.GetJobStatusRes) => void): grpc.ClientUnaryCall;
    public getJobStatus(request: joblet_pb.GetJobStatusReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: joblet_pb.GetJobStatusRes) => void): grpc.ClientUnaryCall;
    public stopJob(request: joblet_pb.StopJobReq, callback: (error: grpc.ServiceError | null, response: joblet_pb.StopJobRes) => void): grpc.ClientUnaryCall;
    public stopJob(request: joblet_pb.StopJobReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: joblet_pb.StopJobRes) => void): grpc.ClientUnaryCall;
    public stopJob(request: joblet_pb.StopJobReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: joblet_pb.StopJobRes) => void): grpc.ClientUnaryCall;
    public cancelJob(request: joblet_pb.CancelJobReq, callback: (error: grpc.ServiceError | null, response: joblet_pb.CancelJobRes) => void): grpc.ClientUnaryCall;
    public cancelJob(request: joblet_pb.CancelJobReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: joblet_pb.CancelJobRes) => void): grpc.ClientUnaryCall;
    public cancelJob(request: joblet_pb.CancelJobReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: joblet_pb.CancelJobRes) => void): grpc.ClientUnaryCall;
    public deleteJob(request: joblet_pb.DeleteJobReq, callback: (error: grpc.ServiceError | null, response: joblet_pb.DeleteJobRes) => void): grpc.ClientUnaryCall;
    public deleteJob(request: joblet_pb.DeleteJobReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: joblet_pb.DeleteJobRes) => void): grpc.ClientUnaryCall;
    public deleteJob(request: joblet_pb.DeleteJobReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: joblet_pb.DeleteJobRes) => void): grpc.ClientUnaryCall;
    public deleteAllJobs(request: joblet_pb.DeleteAllJobsReq, callback: (error: grpc.ServiceError | null, response: joblet_pb.DeleteAllJobsRes) => void): grpc.ClientUnaryCall;
    public deleteAllJobs(request: joblet_pb.DeleteAllJobsReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: joblet_pb.DeleteAllJobsRes) => void): grpc.ClientUnaryCall;
    public deleteAllJobs(request: joblet_pb.DeleteAllJobsReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: joblet_pb.DeleteAllJobsRes) => void): grpc.ClientUnaryCall;
    public getJobLogs(request: joblet_pb.GetJobLogsReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<joblet_pb.DataChunk>;
    public getJobLogs(request: joblet_pb.GetJobLogsReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<joblet_pb.DataChunk>;
    public listJobs(request: joblet_pb.EmptyRequest, callback: (error: grpc.ServiceError | null, response: joblet_pb.Jobs) => void): grpc.ClientUnaryCall;
    public listJobs(request: joblet_pb.EmptyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: joblet_pb.Jobs) => void): grpc.ClientUnaryCall;
    public listJobs(request: joblet_pb.EmptyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: joblet_pb.Jobs) => void): grpc.ClientUnaryCall;
    public streamJobTelemetry(request: joblet_pb.StreamTelemetryRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<joblet_pb.TelemetryEvent>;
    public streamJobTelemetry(request: joblet_pb.StreamTelemetryRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<joblet_pb.TelemetryEvent>;
    public getJobTelemetry(request: joblet_pb.GetTelemetryRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<joblet_pb.TelemetryEvent>;
    public getJobTelemetry(request: joblet_pb.GetTelemetryRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<joblet_pb.TelemetryEvent>;
}

interface INetworkServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createNetwork: INetworkServiceService_ICreateNetwork;
    listNetworks: INetworkServiceService_IListNetworks;
    removeNetwork: INetworkServiceService_IRemoveNetwork;
}

interface INetworkServiceService_ICreateNetwork extends grpc.MethodDefinition<joblet_pb.CreateNetworkReq, joblet_pb.CreateNetworkRes> {
    path: "/joblet.NetworkService/CreateNetwork";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<joblet_pb.CreateNetworkReq>;
    requestDeserialize: grpc.deserialize<joblet_pb.CreateNetworkReq>;
    responseSerialize: grpc.serialize<joblet_pb.CreateNetworkRes>;
    responseDeserialize: grpc.deserialize<joblet_pb.CreateNetworkRes>;
}
interface INetworkServiceService_IListNetworks extends grpc.MethodDefinition<joblet_pb.EmptyRequest, joblet_pb.Networks> {
    path: "/joblet.NetworkService/ListNetworks";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<joblet_pb.EmptyRequest>;
    requestDeserialize: grpc.deserialize<joblet_pb.EmptyRequest>;
    responseSerialize: grpc.serialize<joblet_pb.Networks>;
    responseDeserialize: grpc.deserialize<joblet_pb.Networks>;
}
interface INetworkServiceService_IRemoveNetwork extends grpc.MethodDefinition<joblet_pb.RemoveNetworkReq, joblet_pb.RemoveNetworkRes> {
    path: "/joblet.NetworkService/RemoveNetwork";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<joblet_pb.RemoveNetworkReq>;
    requestDeserialize: grpc.deserialize<joblet_pb.RemoveNetworkReq>;
    responseSerialize: grpc.serialize<joblet_pb.RemoveNetworkRes>;
    responseDeserialize: grpc.deserialize<joblet_pb.RemoveNetworkRes>;
}

export const NetworkServiceService: INetworkServiceService;

export interface INetworkServiceServer extends grpc.UntypedServiceImplementation {
    createNetwork: grpc.handleUnaryCall<joblet_pb.CreateNetworkReq, joblet_pb.CreateNetworkRes>;
    listNetworks: grpc.handleUnaryCall<joblet_pb.EmptyRequest, joblet_pb.Networks>;
    removeNetwork: grpc.handleUnaryCall<joblet_pb.RemoveNetworkReq, joblet_pb.RemoveNetworkRes>;
}

export interface INetworkServiceClient {
    createNetwork(request: joblet_pb.CreateNetworkReq, callback: (error: grpc.ServiceError | null, response: joblet_pb.CreateNetworkRes) => void): grpc.ClientUnaryCall;
    createNetwork(request: joblet_pb.CreateNetworkReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: joblet_pb.CreateNetworkRes) => void): grpc.ClientUnaryCall;
    createNetwork(request: joblet_pb.CreateNetworkReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: joblet_pb.CreateNetworkRes) => void): grpc.ClientUnaryCall;
    listNetworks(request: joblet_pb.EmptyRequest, callback: (error: grpc.ServiceError | null, response: joblet_pb.Networks) => void): grpc.ClientUnaryCall;
    listNetworks(request: joblet_pb.EmptyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: joblet_pb.Networks) => void): grpc.ClientUnaryCall;
    listNetworks(request: joblet_pb.EmptyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: joblet_pb.Networks) => void): grpc.ClientUnaryCall;
    removeNetwork(request: joblet_pb.RemoveNetworkReq, callback: (error: grpc.ServiceError | null, response: joblet_pb.RemoveNetworkRes) => void): grpc.ClientUnaryCall;
    removeNetwork(request: joblet_pb.RemoveNetworkReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: joblet_pb.RemoveNetworkRes) => void): grpc.ClientUnaryCall;
    removeNetwork(request: joblet_pb.RemoveNetworkReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: joblet_pb.RemoveNetworkRes) => void): grpc.ClientUnaryCall;
}

export class NetworkServiceClient extends grpc.Client implements INetworkServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createNetwork(request: joblet_pb.CreateNetworkReq, callback: (error: grpc.ServiceError | null, response: joblet_pb.CreateNetworkRes) => void): grpc.ClientUnaryCall;
    public createNetwork(request: joblet_pb.CreateNetworkReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: joblet_pb.CreateNetworkRes) => void): grpc.ClientUnaryCall;
    public createNetwork(request: joblet_pb.CreateNetworkReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: joblet_pb.CreateNetworkRes) => void): grpc.ClientUnaryCall;
    public listNetworks(request: joblet_pb.EmptyRequest, callback: (error: grpc.ServiceError | null, response: joblet_pb.Networks) => void): grpc.ClientUnaryCall;
    public listNetworks(request: joblet_pb.EmptyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: joblet_pb.Networks) => void): grpc.ClientUnaryCall;
    public listNetworks(request: joblet_pb.EmptyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: joblet_pb.Networks) => void): grpc.ClientUnaryCall;
    public removeNetwork(request: joblet_pb.RemoveNetworkReq, callback: (error: grpc.ServiceError | null, response: joblet_pb.RemoveNetworkRes) => void): grpc.ClientUnaryCall;
    public removeNetwork(request: joblet_pb.RemoveNetworkReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: joblet_pb.RemoveNetworkRes) => void): grpc.ClientUnaryCall;
    public removeNetwork(request: joblet_pb.RemoveNetworkReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: joblet_pb.RemoveNetworkRes) => void): grpc.ClientUnaryCall;
}

interface IVolumeServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createVolume: IVolumeServiceService_ICreateVolume;
    listVolumes: IVolumeServiceService_IListVolumes;
    removeVolume: IVolumeServiceService_IRemoveVolume;
}

interface IVolumeServiceService_ICreateVolume extends grpc.MethodDefinition<joblet_pb.CreateVolumeReq, joblet_pb.CreateVolumeRes> {
    path: "/joblet.VolumeService/CreateVolume";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<joblet_pb.CreateVolumeReq>;
    requestDeserialize: grpc.deserialize<joblet_pb.CreateVolumeReq>;
    responseSerialize: grpc.serialize<joblet_pb.CreateVolumeRes>;
    responseDeserialize: grpc.deserialize<joblet_pb.CreateVolumeRes>;
}
interface IVolumeServiceService_IListVolumes extends grpc.MethodDefinition<joblet_pb.EmptyRequest, joblet_pb.Volumes> {
    path: "/joblet.VolumeService/ListVolumes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<joblet_pb.EmptyRequest>;
    requestDeserialize: grpc.deserialize<joblet_pb.EmptyRequest>;
    responseSerialize: grpc.serialize<joblet_pb.Volumes>;
    responseDeserialize: grpc.deserialize<joblet_pb.Volumes>;
}
interface IVolumeServiceService_IRemoveVolume extends grpc.MethodDefinition<joblet_pb.RemoveVolumeReq, joblet_pb.RemoveVolumeRes> {
    path: "/joblet.VolumeService/RemoveVolume";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<joblet_pb.RemoveVolumeReq>;
    requestDeserialize: grpc.deserialize<joblet_pb.RemoveVolumeReq>;
    responseSerialize: grpc.serialize<joblet_pb.RemoveVolumeRes>;
    responseDeserialize: grpc.deserialize<joblet_pb.RemoveVolumeRes>;
}

export const VolumeServiceService: IVolumeServiceService;

export interface IVolumeServiceServer extends grpc.UntypedServiceImplementation {
    createVolume: grpc.handleUnaryCall<joblet_pb.CreateVolumeReq, joblet_pb.CreateVolumeRes>;
    listVolumes: grpc.handleUnaryCall<joblet_pb.EmptyRequest, joblet_pb.Volumes>;
    removeVolume: grpc.handleUnaryCall<joblet_pb.RemoveVolumeReq, joblet_pb.RemoveVolumeRes>;
}

export interface IVolumeServiceClient {
    createVolume(request: joblet_pb.CreateVolumeReq, callback: (error: grpc.ServiceError | null, response: joblet_pb.CreateVolumeRes) => void): grpc.ClientUnaryCall;
    createVolume(request: joblet_pb.CreateVolumeReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: joblet_pb.CreateVolumeRes) => void): grpc.ClientUnaryCall;
    createVolume(request: joblet_pb.CreateVolumeReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: joblet_pb.CreateVolumeRes) => void): grpc.ClientUnaryCall;
    listVolumes(request: joblet_pb.EmptyRequest, callback: (error: grpc.ServiceError | null, response: joblet_pb.Volumes) => void): grpc.ClientUnaryCall;
    listVolumes(request: joblet_pb.EmptyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: joblet_pb.Volumes) => void): grpc.ClientUnaryCall;
    listVolumes(request: joblet_pb.EmptyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: joblet_pb.Volumes) => void): grpc.ClientUnaryCall;
    removeVolume(request: joblet_pb.RemoveVolumeReq, callback: (error: grpc.ServiceError | null, response: joblet_pb.RemoveVolumeRes) => void): grpc.ClientUnaryCall;
    removeVolume(request: joblet_pb.RemoveVolumeReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: joblet_pb.RemoveVolumeRes) => void): grpc.ClientUnaryCall;
    removeVolume(request: joblet_pb.RemoveVolumeReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: joblet_pb.RemoveVolumeRes) => void): grpc.ClientUnaryCall;
}

export class VolumeServiceClient extends grpc.Client implements IVolumeServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createVolume(request: joblet_pb.CreateVolumeReq, callback: (error: grpc.ServiceError | null, response: joblet_pb.CreateVolumeRes) => void): grpc.ClientUnaryCall;
    public createVolume(request: joblet_pb.CreateVolumeReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: joblet_pb.CreateVolumeRes) => void): grpc.ClientUnaryCall;
    public createVolume(request: joblet_pb.CreateVolumeReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: joblet_pb.CreateVolumeRes) => void): grpc.ClientUnaryCall;
    public listVolumes(request: joblet_pb.EmptyRequest, callback: (error: grpc.ServiceError | null, response: joblet_pb.Volumes) => void): grpc.ClientUnaryCall;
    public listVolumes(request: joblet_pb.EmptyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: joblet_pb.Volumes) => void): grpc.ClientUnaryCall;
    public listVolumes(request: joblet_pb.EmptyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: joblet_pb.Volumes) => void): grpc.ClientUnaryCall;
    public removeVolume(request: joblet_pb.RemoveVolumeReq, callback: (error: grpc.ServiceError | null, response: joblet_pb.RemoveVolumeRes) => void): grpc.ClientUnaryCall;
    public removeVolume(request: joblet_pb.RemoveVolumeReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: joblet_pb.RemoveVolumeRes) => void): grpc.ClientUnaryCall;
    public removeVolume(request: joblet_pb.RemoveVolumeReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: joblet_pb.RemoveVolumeRes) => void): grpc.ClientUnaryCall;
}

interface IMonitoringServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getSystemStatus: IMonitoringServiceService_IGetSystemStatus;
    streamSystemMetrics: IMonitoringServiceService_IStreamSystemMetrics;
}

interface IMonitoringServiceService_IGetSystemStatus extends grpc.MethodDefinition<joblet_pb.EmptyRequest, joblet_pb.SystemStatusRes> {
    path: "/joblet.MonitoringService/GetSystemStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<joblet_pb.EmptyRequest>;
    requestDeserialize: grpc.deserialize<joblet_pb.EmptyRequest>;
    responseSerialize: grpc.serialize<joblet_pb.SystemStatusRes>;
    responseDeserialize: grpc.deserialize<joblet_pb.SystemStatusRes>;
}
interface IMonitoringServiceService_IStreamSystemMetrics extends grpc.MethodDefinition<joblet_pb.StreamMetricsReq, joblet_pb.SystemMetricsRes> {
    path: "/joblet.MonitoringService/StreamSystemMetrics";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<joblet_pb.StreamMetricsReq>;
    requestDeserialize: grpc.deserialize<joblet_pb.StreamMetricsReq>;
    responseSerialize: grpc.serialize<joblet_pb.SystemMetricsRes>;
    responseDeserialize: grpc.deserialize<joblet_pb.SystemMetricsRes>;
}

export const MonitoringServiceService: IMonitoringServiceService;

export interface IMonitoringServiceServer extends grpc.UntypedServiceImplementation {
    getSystemStatus: grpc.handleUnaryCall<joblet_pb.EmptyRequest, joblet_pb.SystemStatusRes>;
    streamSystemMetrics: grpc.handleServerStreamingCall<joblet_pb.StreamMetricsReq, joblet_pb.SystemMetricsRes>;
}

export interface IMonitoringServiceClient {
    getSystemStatus(request: joblet_pb.EmptyRequest, callback: (error: grpc.ServiceError | null, response: joblet_pb.SystemStatusRes) => void): grpc.ClientUnaryCall;
    getSystemStatus(request: joblet_pb.EmptyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: joblet_pb.SystemStatusRes) => void): grpc.ClientUnaryCall;
    getSystemStatus(request: joblet_pb.EmptyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: joblet_pb.SystemStatusRes) => void): grpc.ClientUnaryCall;
    streamSystemMetrics(request: joblet_pb.StreamMetricsReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<joblet_pb.SystemMetricsRes>;
    streamSystemMetrics(request: joblet_pb.StreamMetricsReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<joblet_pb.SystemMetricsRes>;
}

export class MonitoringServiceClient extends grpc.Client implements IMonitoringServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getSystemStatus(request: joblet_pb.EmptyRequest, callback: (error: grpc.ServiceError | null, response: joblet_pb.SystemStatusRes) => void): grpc.ClientUnaryCall;
    public getSystemStatus(request: joblet_pb.EmptyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: joblet_pb.SystemStatusRes) => void): grpc.ClientUnaryCall;
    public getSystemStatus(request: joblet_pb.EmptyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: joblet_pb.SystemStatusRes) => void): grpc.ClientUnaryCall;
    public streamSystemMetrics(request: joblet_pb.StreamMetricsReq, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<joblet_pb.SystemMetricsRes>;
    public streamSystemMetrics(request: joblet_pb.StreamMetricsReq, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<joblet_pb.SystemMetricsRes>;
}

interface IRuntimeServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listRuntimes: IRuntimeServiceService_IListRuntimes;
    getRuntimeInfo: IRuntimeServiceService_IGetRuntimeInfo;
    testRuntime: IRuntimeServiceService_ITestRuntime;
    installRuntimeFromGithub: IRuntimeServiceService_IInstallRuntimeFromGithub;
    installRuntimeFromLocal: IRuntimeServiceService_IInstallRuntimeFromLocal;
    streamingInstallRuntimeFromGithub: IRuntimeServiceService_IStreamingInstallRuntimeFromGithub;
    streamingInstallRuntimeFromLocal: IRuntimeServiceService_IStreamingInstallRuntimeFromLocal;
    validateRuntimeSpec: IRuntimeServiceService_IValidateRuntimeSpec;
    removeRuntime: IRuntimeServiceService_IRemoveRuntime;
}

interface IRuntimeServiceService_IListRuntimes extends grpc.MethodDefinition<joblet_pb.EmptyRequest, joblet_pb.RuntimesRes> {
    path: "/joblet.RuntimeService/ListRuntimes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<joblet_pb.EmptyRequest>;
    requestDeserialize: grpc.deserialize<joblet_pb.EmptyRequest>;
    responseSerialize: grpc.serialize<joblet_pb.RuntimesRes>;
    responseDeserialize: grpc.deserialize<joblet_pb.RuntimesRes>;
}
interface IRuntimeServiceService_IGetRuntimeInfo extends grpc.MethodDefinition<joblet_pb.RuntimeInfoReq, joblet_pb.RuntimeInfoRes> {
    path: "/joblet.RuntimeService/GetRuntimeInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<joblet_pb.RuntimeInfoReq>;
    requestDeserialize: grpc.deserialize<joblet_pb.RuntimeInfoReq>;
    responseSerialize: grpc.serialize<joblet_pb.RuntimeInfoRes>;
    responseDeserialize: grpc.deserialize<joblet_pb.RuntimeInfoRes>;
}
interface IRuntimeServiceService_ITestRuntime extends grpc.MethodDefinition<joblet_pb.RuntimeTestReq, joblet_pb.RuntimeTestRes> {
    path: "/joblet.RuntimeService/TestRuntime";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<joblet_pb.RuntimeTestReq>;
    requestDeserialize: grpc.deserialize<joblet_pb.RuntimeTestReq>;
    responseSerialize: grpc.serialize<joblet_pb.RuntimeTestRes>;
    responseDeserialize: grpc.deserialize<joblet_pb.RuntimeTestRes>;
}
interface IRuntimeServiceService_IInstallRuntimeFromGithub extends grpc.MethodDefinition<joblet_pb.InstallRuntimeRequest, joblet_pb.InstallRuntimeResponse> {
    path: "/joblet.RuntimeService/InstallRuntimeFromGithub";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<joblet_pb.InstallRuntimeRequest>;
    requestDeserialize: grpc.deserialize<joblet_pb.InstallRuntimeRequest>;
    responseSerialize: grpc.serialize<joblet_pb.InstallRuntimeResponse>;
    responseDeserialize: grpc.deserialize<joblet_pb.InstallRuntimeResponse>;
}
interface IRuntimeServiceService_IInstallRuntimeFromLocal extends grpc.MethodDefinition<joblet_pb.InstallRuntimeFromLocalRequest, joblet_pb.InstallRuntimeResponse> {
    path: "/joblet.RuntimeService/InstallRuntimeFromLocal";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<joblet_pb.InstallRuntimeFromLocalRequest>;
    requestDeserialize: grpc.deserialize<joblet_pb.InstallRuntimeFromLocalRequest>;
    responseSerialize: grpc.serialize<joblet_pb.InstallRuntimeResponse>;
    responseDeserialize: grpc.deserialize<joblet_pb.InstallRuntimeResponse>;
}
interface IRuntimeServiceService_IStreamingInstallRuntimeFromGithub extends grpc.MethodDefinition<joblet_pb.InstallRuntimeRequest, joblet_pb.RuntimeInstallationChunk> {
    path: "/joblet.RuntimeService/StreamingInstallRuntimeFromGithub";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<joblet_pb.InstallRuntimeRequest>;
    requestDeserialize: grpc.deserialize<joblet_pb.InstallRuntimeRequest>;
    responseSerialize: grpc.serialize<joblet_pb.RuntimeInstallationChunk>;
    responseDeserialize: grpc.deserialize<joblet_pb.RuntimeInstallationChunk>;
}
interface IRuntimeServiceService_IStreamingInstallRuntimeFromLocal extends grpc.MethodDefinition<joblet_pb.InstallRuntimeFromLocalRequest, joblet_pb.RuntimeInstallationChunk> {
    path: "/joblet.RuntimeService/StreamingInstallRuntimeFromLocal";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<joblet_pb.InstallRuntimeFromLocalRequest>;
    requestDeserialize: grpc.deserialize<joblet_pb.InstallRuntimeFromLocalRequest>;
    responseSerialize: grpc.serialize<joblet_pb.RuntimeInstallationChunk>;
    responseDeserialize: grpc.deserialize<joblet_pb.RuntimeInstallationChunk>;
}
interface IRuntimeServiceService_IValidateRuntimeSpec extends grpc.MethodDefinition<joblet_pb.ValidateRuntimeSpecRequest, joblet_pb.ValidateRuntimeSpecResponse> {
    path: "/joblet.RuntimeService/ValidateRuntimeSpec";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<joblet_pb.ValidateRuntimeSpecRequest>;
    requestDeserialize: grpc.deserialize<joblet_pb.ValidateRuntimeSpecRequest>;
    responseSerialize: grpc.serialize<joblet_pb.ValidateRuntimeSpecResponse>;
    responseDeserialize: grpc.deserialize<joblet_pb.ValidateRuntimeSpecResponse>;
}
interface IRuntimeServiceService_IRemoveRuntime extends grpc.MethodDefinition<joblet_pb.RuntimeRemoveReq, joblet_pb.RuntimeRemoveRes> {
    path: "/joblet.RuntimeService/RemoveRuntime";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<joblet_pb.RuntimeRemoveReq>;
    requestDeserialize: grpc.deserialize<joblet_pb.RuntimeRemoveReq>;
    responseSerialize: grpc.serialize<joblet_pb.RuntimeRemoveRes>;
    responseDeserialize: grpc.deserialize<joblet_pb.RuntimeRemoveRes>;
}

export const RuntimeServiceService: IRuntimeServiceService;

export interface IRuntimeServiceServer extends grpc.UntypedServiceImplementation {
    listRuntimes: grpc.handleUnaryCall<joblet_pb.EmptyRequest, joblet_pb.RuntimesRes>;
    getRuntimeInfo: grpc.handleUnaryCall<joblet_pb.RuntimeInfoReq, joblet_pb.RuntimeInfoRes>;
    testRuntime: grpc.handleUnaryCall<joblet_pb.RuntimeTestReq, joblet_pb.RuntimeTestRes>;
    installRuntimeFromGithub: grpc.handleUnaryCall<joblet_pb.InstallRuntimeRequest, joblet_pb.InstallRuntimeResponse>;
    installRuntimeFromLocal: grpc.handleUnaryCall<joblet_pb.InstallRuntimeFromLocalRequest, joblet_pb.InstallRuntimeResponse>;
    streamingInstallRuntimeFromGithub: grpc.handleServerStreamingCall<joblet_pb.InstallRuntimeRequest, joblet_pb.RuntimeInstallationChunk>;
    streamingInstallRuntimeFromLocal: grpc.handleServerStreamingCall<joblet_pb.InstallRuntimeFromLocalRequest, joblet_pb.RuntimeInstallationChunk>;
    validateRuntimeSpec: grpc.handleUnaryCall<joblet_pb.ValidateRuntimeSpecRequest, joblet_pb.ValidateRuntimeSpecResponse>;
    removeRuntime: grpc.handleUnaryCall<joblet_pb.RuntimeRemoveReq, joblet_pb.RuntimeRemoveRes>;
}

export interface IRuntimeServiceClient {
    listRuntimes(request: joblet_pb.EmptyRequest, callback: (error: grpc.ServiceError | null, response: joblet_pb.RuntimesRes) => void): grpc.ClientUnaryCall;
    listRuntimes(request: joblet_pb.EmptyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: joblet_pb.RuntimesRes) => void): grpc.ClientUnaryCall;
    listRuntimes(request: joblet_pb.EmptyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: joblet_pb.RuntimesRes) => void): grpc.ClientUnaryCall;
    getRuntimeInfo(request: joblet_pb.RuntimeInfoReq, callback: (error: grpc.ServiceError | null, response: joblet_pb.RuntimeInfoRes) => void): grpc.ClientUnaryCall;
    getRuntimeInfo(request: joblet_pb.RuntimeInfoReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: joblet_pb.RuntimeInfoRes) => void): grpc.ClientUnaryCall;
    getRuntimeInfo(request: joblet_pb.RuntimeInfoReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: joblet_pb.RuntimeInfoRes) => void): grpc.ClientUnaryCall;
    testRuntime(request: joblet_pb.RuntimeTestReq, callback: (error: grpc.ServiceError | null, response: joblet_pb.RuntimeTestRes) => void): grpc.ClientUnaryCall;
    testRuntime(request: joblet_pb.RuntimeTestReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: joblet_pb.RuntimeTestRes) => void): grpc.ClientUnaryCall;
    testRuntime(request: joblet_pb.RuntimeTestReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: joblet_pb.RuntimeTestRes) => void): grpc.ClientUnaryCall;
    installRuntimeFromGithub(request: joblet_pb.InstallRuntimeRequest, callback: (error: grpc.ServiceError | null, response: joblet_pb.InstallRuntimeResponse) => void): grpc.ClientUnaryCall;
    installRuntimeFromGithub(request: joblet_pb.InstallRuntimeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: joblet_pb.InstallRuntimeResponse) => void): grpc.ClientUnaryCall;
    installRuntimeFromGithub(request: joblet_pb.InstallRuntimeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: joblet_pb.InstallRuntimeResponse) => void): grpc.ClientUnaryCall;
    installRuntimeFromLocal(request: joblet_pb.InstallRuntimeFromLocalRequest, callback: (error: grpc.ServiceError | null, response: joblet_pb.InstallRuntimeResponse) => void): grpc.ClientUnaryCall;
    installRuntimeFromLocal(request: joblet_pb.InstallRuntimeFromLocalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: joblet_pb.InstallRuntimeResponse) => void): grpc.ClientUnaryCall;
    installRuntimeFromLocal(request: joblet_pb.InstallRuntimeFromLocalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: joblet_pb.InstallRuntimeResponse) => void): grpc.ClientUnaryCall;
    streamingInstallRuntimeFromGithub(request: joblet_pb.InstallRuntimeRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<joblet_pb.RuntimeInstallationChunk>;
    streamingInstallRuntimeFromGithub(request: joblet_pb.InstallRuntimeRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<joblet_pb.RuntimeInstallationChunk>;
    streamingInstallRuntimeFromLocal(request: joblet_pb.InstallRuntimeFromLocalRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<joblet_pb.RuntimeInstallationChunk>;
    streamingInstallRuntimeFromLocal(request: joblet_pb.InstallRuntimeFromLocalRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<joblet_pb.RuntimeInstallationChunk>;
    validateRuntimeSpec(request: joblet_pb.ValidateRuntimeSpecRequest, callback: (error: grpc.ServiceError | null, response: joblet_pb.ValidateRuntimeSpecResponse) => void): grpc.ClientUnaryCall;
    validateRuntimeSpec(request: joblet_pb.ValidateRuntimeSpecRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: joblet_pb.ValidateRuntimeSpecResponse) => void): grpc.ClientUnaryCall;
    validateRuntimeSpec(request: joblet_pb.ValidateRuntimeSpecRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: joblet_pb.ValidateRuntimeSpecResponse) => void): grpc.ClientUnaryCall;
    removeRuntime(request: joblet_pb.RuntimeRemoveReq, callback: (error: grpc.ServiceError | null, response: joblet_pb.RuntimeRemoveRes) => void): grpc.ClientUnaryCall;
    removeRuntime(request: joblet_pb.RuntimeRemoveReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: joblet_pb.RuntimeRemoveRes) => void): grpc.ClientUnaryCall;
    removeRuntime(request: joblet_pb.RuntimeRemoveReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: joblet_pb.RuntimeRemoveRes) => void): grpc.ClientUnaryCall;
}

export class RuntimeServiceClient extends grpc.Client implements IRuntimeServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public listRuntimes(request: joblet_pb.EmptyRequest, callback: (error: grpc.ServiceError | null, response: joblet_pb.RuntimesRes) => void): grpc.ClientUnaryCall;
    public listRuntimes(request: joblet_pb.EmptyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: joblet_pb.RuntimesRes) => void): grpc.ClientUnaryCall;
    public listRuntimes(request: joblet_pb.EmptyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: joblet_pb.RuntimesRes) => void): grpc.ClientUnaryCall;
    public getRuntimeInfo(request: joblet_pb.RuntimeInfoReq, callback: (error: grpc.ServiceError | null, response: joblet_pb.RuntimeInfoRes) => void): grpc.ClientUnaryCall;
    public getRuntimeInfo(request: joblet_pb.RuntimeInfoReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: joblet_pb.RuntimeInfoRes) => void): grpc.ClientUnaryCall;
    public getRuntimeInfo(request: joblet_pb.RuntimeInfoReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: joblet_pb.RuntimeInfoRes) => void): grpc.ClientUnaryCall;
    public testRuntime(request: joblet_pb.RuntimeTestReq, callback: (error: grpc.ServiceError | null, response: joblet_pb.RuntimeTestRes) => void): grpc.ClientUnaryCall;
    public testRuntime(request: joblet_pb.RuntimeTestReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: joblet_pb.RuntimeTestRes) => void): grpc.ClientUnaryCall;
    public testRuntime(request: joblet_pb.RuntimeTestReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: joblet_pb.RuntimeTestRes) => void): grpc.ClientUnaryCall;
    public installRuntimeFromGithub(request: joblet_pb.InstallRuntimeRequest, callback: (error: grpc.ServiceError | null, response: joblet_pb.InstallRuntimeResponse) => void): grpc.ClientUnaryCall;
    public installRuntimeFromGithub(request: joblet_pb.InstallRuntimeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: joblet_pb.InstallRuntimeResponse) => void): grpc.ClientUnaryCall;
    public installRuntimeFromGithub(request: joblet_pb.InstallRuntimeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: joblet_pb.InstallRuntimeResponse) => void): grpc.ClientUnaryCall;
    public installRuntimeFromLocal(request: joblet_pb.InstallRuntimeFromLocalRequest, callback: (error: grpc.ServiceError | null, response: joblet_pb.InstallRuntimeResponse) => void): grpc.ClientUnaryCall;
    public installRuntimeFromLocal(request: joblet_pb.InstallRuntimeFromLocalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: joblet_pb.InstallRuntimeResponse) => void): grpc.ClientUnaryCall;
    public installRuntimeFromLocal(request: joblet_pb.InstallRuntimeFromLocalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: joblet_pb.InstallRuntimeResponse) => void): grpc.ClientUnaryCall;
    public streamingInstallRuntimeFromGithub(request: joblet_pb.InstallRuntimeRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<joblet_pb.RuntimeInstallationChunk>;
    public streamingInstallRuntimeFromGithub(request: joblet_pb.InstallRuntimeRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<joblet_pb.RuntimeInstallationChunk>;
    public streamingInstallRuntimeFromLocal(request: joblet_pb.InstallRuntimeFromLocalRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<joblet_pb.RuntimeInstallationChunk>;
    public streamingInstallRuntimeFromLocal(request: joblet_pb.InstallRuntimeFromLocalRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<joblet_pb.RuntimeInstallationChunk>;
    public validateRuntimeSpec(request: joblet_pb.ValidateRuntimeSpecRequest, callback: (error: grpc.ServiceError | null, response: joblet_pb.ValidateRuntimeSpecResponse) => void): grpc.ClientUnaryCall;
    public validateRuntimeSpec(request: joblet_pb.ValidateRuntimeSpecRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: joblet_pb.ValidateRuntimeSpecResponse) => void): grpc.ClientUnaryCall;
    public validateRuntimeSpec(request: joblet_pb.ValidateRuntimeSpecRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: joblet_pb.ValidateRuntimeSpecResponse) => void): grpc.ClientUnaryCall;
    public removeRuntime(request: joblet_pb.RuntimeRemoveReq, callback: (error: grpc.ServiceError | null, response: joblet_pb.RuntimeRemoveRes) => void): grpc.ClientUnaryCall;
    public removeRuntime(request: joblet_pb.RuntimeRemoveReq, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: joblet_pb.RuntimeRemoveRes) => void): grpc.ClientUnaryCall;
    public removeRuntime(request: joblet_pb.RuntimeRemoveReq, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: joblet_pb.RuntimeRemoveRes) => void): grpc.ClientUnaryCall;
}
