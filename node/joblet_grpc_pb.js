// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var joblet_pb = require('./joblet_pb.js');

function serialize_joblet_CancelJobReq(arg) {
  if (!(arg instanceof joblet_pb.CancelJobReq)) {
    throw new Error('Expected argument of type joblet.CancelJobReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_CancelJobReq(buffer_arg) {
  return joblet_pb.CancelJobReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_CancelJobRes(arg) {
  if (!(arg instanceof joblet_pb.CancelJobRes)) {
    throw new Error('Expected argument of type joblet.CancelJobRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_CancelJobRes(buffer_arg) {
  return joblet_pb.CancelJobRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_CreateNetworkReq(arg) {
  if (!(arg instanceof joblet_pb.CreateNetworkReq)) {
    throw new Error('Expected argument of type joblet.CreateNetworkReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_CreateNetworkReq(buffer_arg) {
  return joblet_pb.CreateNetworkReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_CreateNetworkRes(arg) {
  if (!(arg instanceof joblet_pb.CreateNetworkRes)) {
    throw new Error('Expected argument of type joblet.CreateNetworkRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_CreateNetworkRes(buffer_arg) {
  return joblet_pb.CreateNetworkRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_CreateVolumeReq(arg) {
  if (!(arg instanceof joblet_pb.CreateVolumeReq)) {
    throw new Error('Expected argument of type joblet.CreateVolumeReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_CreateVolumeReq(buffer_arg) {
  return joblet_pb.CreateVolumeReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_CreateVolumeRes(arg) {
  if (!(arg instanceof joblet_pb.CreateVolumeRes)) {
    throw new Error('Expected argument of type joblet.CreateVolumeRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_CreateVolumeRes(buffer_arg) {
  return joblet_pb.CreateVolumeRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_DataChunk(arg) {
  if (!(arg instanceof joblet_pb.DataChunk)) {
    throw new Error('Expected argument of type joblet.DataChunk');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_DataChunk(buffer_arg) {
  return joblet_pb.DataChunk.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_DeleteAllJobsReq(arg) {
  if (!(arg instanceof joblet_pb.DeleteAllJobsReq)) {
    throw new Error('Expected argument of type joblet.DeleteAllJobsReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_DeleteAllJobsReq(buffer_arg) {
  return joblet_pb.DeleteAllJobsReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_DeleteAllJobsRes(arg) {
  if (!(arg instanceof joblet_pb.DeleteAllJobsRes)) {
    throw new Error('Expected argument of type joblet.DeleteAllJobsRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_DeleteAllJobsRes(buffer_arg) {
  return joblet_pb.DeleteAllJobsRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_DeleteJobReq(arg) {
  if (!(arg instanceof joblet_pb.DeleteJobReq)) {
    throw new Error('Expected argument of type joblet.DeleteJobReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_DeleteJobReq(buffer_arg) {
  return joblet_pb.DeleteJobReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_DeleteJobRes(arg) {
  if (!(arg instanceof joblet_pb.DeleteJobRes)) {
    throw new Error('Expected argument of type joblet.DeleteJobRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_DeleteJobRes(buffer_arg) {
  return joblet_pb.DeleteJobRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_EmptyRequest(arg) {
  if (!(arg instanceof joblet_pb.EmptyRequest)) {
    throw new Error('Expected argument of type joblet.EmptyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_EmptyRequest(buffer_arg) {
  return joblet_pb.EmptyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_GetJobLogsReq(arg) {
  if (!(arg instanceof joblet_pb.GetJobLogsReq)) {
    throw new Error('Expected argument of type joblet.GetJobLogsReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_GetJobLogsReq(buffer_arg) {
  return joblet_pb.GetJobLogsReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_GetJobStatusReq(arg) {
  if (!(arg instanceof joblet_pb.GetJobStatusReq)) {
    throw new Error('Expected argument of type joblet.GetJobStatusReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_GetJobStatusReq(buffer_arg) {
  return joblet_pb.GetJobStatusReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_GetJobStatusRes(arg) {
  if (!(arg instanceof joblet_pb.GetJobStatusRes)) {
    throw new Error('Expected argument of type joblet.GetJobStatusRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_GetJobStatusRes(buffer_arg) {
  return joblet_pb.GetJobStatusRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_GetTelemetryRequest(arg) {
  if (!(arg instanceof joblet_pb.GetTelemetryRequest)) {
    throw new Error('Expected argument of type joblet.GetTelemetryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_GetTelemetryRequest(buffer_arg) {
  return joblet_pb.GetTelemetryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_InstallRuntimeFromLocalRequest(arg) {
  if (!(arg instanceof joblet_pb.InstallRuntimeFromLocalRequest)) {
    throw new Error('Expected argument of type joblet.InstallRuntimeFromLocalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_InstallRuntimeFromLocalRequest(buffer_arg) {
  return joblet_pb.InstallRuntimeFromLocalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_InstallRuntimeRequest(arg) {
  if (!(arg instanceof joblet_pb.InstallRuntimeRequest)) {
    throw new Error('Expected argument of type joblet.InstallRuntimeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_InstallRuntimeRequest(buffer_arg) {
  return joblet_pb.InstallRuntimeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_InstallRuntimeResponse(arg) {
  if (!(arg instanceof joblet_pb.InstallRuntimeResponse)) {
    throw new Error('Expected argument of type joblet.InstallRuntimeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_InstallRuntimeResponse(buffer_arg) {
  return joblet_pb.InstallRuntimeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_Jobs(arg) {
  if (!(arg instanceof joblet_pb.Jobs)) {
    throw new Error('Expected argument of type joblet.Jobs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_Jobs(buffer_arg) {
  return joblet_pb.Jobs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_Networks(arg) {
  if (!(arg instanceof joblet_pb.Networks)) {
    throw new Error('Expected argument of type joblet.Networks');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_Networks(buffer_arg) {
  return joblet_pb.Networks.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_RemoveNetworkReq(arg) {
  if (!(arg instanceof joblet_pb.RemoveNetworkReq)) {
    throw new Error('Expected argument of type joblet.RemoveNetworkReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_RemoveNetworkReq(buffer_arg) {
  return joblet_pb.RemoveNetworkReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_RemoveNetworkRes(arg) {
  if (!(arg instanceof joblet_pb.RemoveNetworkRes)) {
    throw new Error('Expected argument of type joblet.RemoveNetworkRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_RemoveNetworkRes(buffer_arg) {
  return joblet_pb.RemoveNetworkRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_RemoveVolumeReq(arg) {
  if (!(arg instanceof joblet_pb.RemoveVolumeReq)) {
    throw new Error('Expected argument of type joblet.RemoveVolumeReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_RemoveVolumeReq(buffer_arg) {
  return joblet_pb.RemoveVolumeReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_RemoveVolumeRes(arg) {
  if (!(arg instanceof joblet_pb.RemoveVolumeRes)) {
    throw new Error('Expected argument of type joblet.RemoveVolumeRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_RemoveVolumeRes(buffer_arg) {
  return joblet_pb.RemoveVolumeRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_RunJobRequest(arg) {
  if (!(arg instanceof joblet_pb.RunJobRequest)) {
    throw new Error('Expected argument of type joblet.RunJobRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_RunJobRequest(buffer_arg) {
  return joblet_pb.RunJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_RunJobResponse(arg) {
  if (!(arg instanceof joblet_pb.RunJobResponse)) {
    throw new Error('Expected argument of type joblet.RunJobResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_RunJobResponse(buffer_arg) {
  return joblet_pb.RunJobResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_RuntimeInfoReq(arg) {
  if (!(arg instanceof joblet_pb.RuntimeInfoReq)) {
    throw new Error('Expected argument of type joblet.RuntimeInfoReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_RuntimeInfoReq(buffer_arg) {
  return joblet_pb.RuntimeInfoReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_RuntimeInfoRes(arg) {
  if (!(arg instanceof joblet_pb.RuntimeInfoRes)) {
    throw new Error('Expected argument of type joblet.RuntimeInfoRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_RuntimeInfoRes(buffer_arg) {
  return joblet_pb.RuntimeInfoRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_RuntimeInstallationChunk(arg) {
  if (!(arg instanceof joblet_pb.RuntimeInstallationChunk)) {
    throw new Error('Expected argument of type joblet.RuntimeInstallationChunk');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_RuntimeInstallationChunk(buffer_arg) {
  return joblet_pb.RuntimeInstallationChunk.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_RuntimeRemoveReq(arg) {
  if (!(arg instanceof joblet_pb.RuntimeRemoveReq)) {
    throw new Error('Expected argument of type joblet.RuntimeRemoveReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_RuntimeRemoveReq(buffer_arg) {
  return joblet_pb.RuntimeRemoveReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_RuntimeRemoveRes(arg) {
  if (!(arg instanceof joblet_pb.RuntimeRemoveRes)) {
    throw new Error('Expected argument of type joblet.RuntimeRemoveRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_RuntimeRemoveRes(buffer_arg) {
  return joblet_pb.RuntimeRemoveRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_RuntimeTestReq(arg) {
  if (!(arg instanceof joblet_pb.RuntimeTestReq)) {
    throw new Error('Expected argument of type joblet.RuntimeTestReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_RuntimeTestReq(buffer_arg) {
  return joblet_pb.RuntimeTestReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_RuntimeTestRes(arg) {
  if (!(arg instanceof joblet_pb.RuntimeTestRes)) {
    throw new Error('Expected argument of type joblet.RuntimeTestRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_RuntimeTestRes(buffer_arg) {
  return joblet_pb.RuntimeTestRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_RuntimesRes(arg) {
  if (!(arg instanceof joblet_pb.RuntimesRes)) {
    throw new Error('Expected argument of type joblet.RuntimesRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_RuntimesRes(buffer_arg) {
  return joblet_pb.RuntimesRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_StopJobReq(arg) {
  if (!(arg instanceof joblet_pb.StopJobReq)) {
    throw new Error('Expected argument of type joblet.StopJobReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_StopJobReq(buffer_arg) {
  return joblet_pb.StopJobReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_StopJobRes(arg) {
  if (!(arg instanceof joblet_pb.StopJobRes)) {
    throw new Error('Expected argument of type joblet.StopJobRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_StopJobRes(buffer_arg) {
  return joblet_pb.StopJobRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_StreamMetricsReq(arg) {
  if (!(arg instanceof joblet_pb.StreamMetricsReq)) {
    throw new Error('Expected argument of type joblet.StreamMetricsReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_StreamMetricsReq(buffer_arg) {
  return joblet_pb.StreamMetricsReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_StreamTelemetryRequest(arg) {
  if (!(arg instanceof joblet_pb.StreamTelemetryRequest)) {
    throw new Error('Expected argument of type joblet.StreamTelemetryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_StreamTelemetryRequest(buffer_arg) {
  return joblet_pb.StreamTelemetryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_SystemMetricsRes(arg) {
  if (!(arg instanceof joblet_pb.SystemMetricsRes)) {
    throw new Error('Expected argument of type joblet.SystemMetricsRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_SystemMetricsRes(buffer_arg) {
  return joblet_pb.SystemMetricsRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_SystemStatusRes(arg) {
  if (!(arg instanceof joblet_pb.SystemStatusRes)) {
    throw new Error('Expected argument of type joblet.SystemStatusRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_SystemStatusRes(buffer_arg) {
  return joblet_pb.SystemStatusRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_TelemetryEvent(arg) {
  if (!(arg instanceof joblet_pb.TelemetryEvent)) {
    throw new Error('Expected argument of type joblet.TelemetryEvent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_TelemetryEvent(buffer_arg) {
  return joblet_pb.TelemetryEvent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_ValidateRuntimeSpecRequest(arg) {
  if (!(arg instanceof joblet_pb.ValidateRuntimeSpecRequest)) {
    throw new Error('Expected argument of type joblet.ValidateRuntimeSpecRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_ValidateRuntimeSpecRequest(buffer_arg) {
  return joblet_pb.ValidateRuntimeSpecRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_ValidateRuntimeSpecResponse(arg) {
  if (!(arg instanceof joblet_pb.ValidateRuntimeSpecResponse)) {
    throw new Error('Expected argument of type joblet.ValidateRuntimeSpecResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_ValidateRuntimeSpecResponse(buffer_arg) {
  return joblet_pb.ValidateRuntimeSpecResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_Volumes(arg) {
  if (!(arg instanceof joblet_pb.Volumes)) {
    throw new Error('Expected argument of type joblet.Volumes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_Volumes(buffer_arg) {
  return joblet_pb.Volumes.deserializeBinary(new Uint8Array(buffer_arg));
}


// Main service for running jobs
var JobServiceService = exports.JobServiceService = {
  // Job operations
runJob: {
    path: '/joblet.JobService/RunJob',
    requestStream: false,
    responseStream: false,
    requestType: joblet_pb.RunJobRequest,
    responseType: joblet_pb.RunJobResponse,
    requestSerialize: serialize_joblet_RunJobRequest,
    requestDeserialize: deserialize_joblet_RunJobRequest,
    responseSerialize: serialize_joblet_RunJobResponse,
    responseDeserialize: deserialize_joblet_RunJobResponse,
  },
  getJobStatus: {
    path: '/joblet.JobService/GetJobStatus',
    requestStream: false,
    responseStream: false,
    requestType: joblet_pb.GetJobStatusReq,
    responseType: joblet_pb.GetJobStatusRes,
    requestSerialize: serialize_joblet_GetJobStatusReq,
    requestDeserialize: deserialize_joblet_GetJobStatusReq,
    responseSerialize: serialize_joblet_GetJobStatusRes,
    responseDeserialize: deserialize_joblet_GetJobStatusRes,
  },
  stopJob: {
    path: '/joblet.JobService/StopJob',
    requestStream: false,
    responseStream: false,
    requestType: joblet_pb.StopJobReq,
    responseType: joblet_pb.StopJobRes,
    requestSerialize: serialize_joblet_StopJobReq,
    requestDeserialize: deserialize_joblet_StopJobReq,
    responseSerialize: serialize_joblet_StopJobRes,
    responseDeserialize: deserialize_joblet_StopJobRes,
  },
  cancelJob: {
    path: '/joblet.JobService/CancelJob',
    requestStream: false,
    responseStream: false,
    requestType: joblet_pb.CancelJobReq,
    responseType: joblet_pb.CancelJobRes,
    requestSerialize: serialize_joblet_CancelJobReq,
    requestDeserialize: deserialize_joblet_CancelJobReq,
    responseSerialize: serialize_joblet_CancelJobRes,
    responseDeserialize: deserialize_joblet_CancelJobRes,
  },
  deleteJob: {
    path: '/joblet.JobService/DeleteJob',
    requestStream: false,
    responseStream: false,
    requestType: joblet_pb.DeleteJobReq,
    responseType: joblet_pb.DeleteJobRes,
    requestSerialize: serialize_joblet_DeleteJobReq,
    requestDeserialize: deserialize_joblet_DeleteJobReq,
    responseSerialize: serialize_joblet_DeleteJobRes,
    responseDeserialize: deserialize_joblet_DeleteJobRes,
  },
  deleteAllJobs: {
    path: '/joblet.JobService/DeleteAllJobs',
    requestStream: false,
    responseStream: false,
    requestType: joblet_pb.DeleteAllJobsReq,
    responseType: joblet_pb.DeleteAllJobsRes,
    requestSerialize: serialize_joblet_DeleteAllJobsReq,
    requestDeserialize: deserialize_joblet_DeleteAllJobsReq,
    responseSerialize: serialize_joblet_DeleteAllJobsRes,
    responseDeserialize: deserialize_joblet_DeleteAllJobsRes,
  },
  getJobLogs: {
    path: '/joblet.JobService/GetJobLogs',
    requestStream: false,
    responseStream: true,
    requestType: joblet_pb.GetJobLogsReq,
    responseType: joblet_pb.DataChunk,
    requestSerialize: serialize_joblet_GetJobLogsReq,
    requestDeserialize: deserialize_joblet_GetJobLogsReq,
    responseSerialize: serialize_joblet_DataChunk,
    responseDeserialize: deserialize_joblet_DataChunk,
  },
  listJobs: {
    path: '/joblet.JobService/ListJobs',
    requestStream: false,
    responseStream: false,
    requestType: joblet_pb.EmptyRequest,
    responseType: joblet_pb.Jobs,
    requestSerialize: serialize_joblet_EmptyRequest,
    requestDeserialize: deserialize_joblet_EmptyRequest,
    responseSerialize: serialize_joblet_Jobs,
    responseDeserialize: deserialize_joblet_Jobs,
  },
  // Unified telemetry (metrics + eBPF activity events)
// Stream live telemetry for a running job
streamJobTelemetry: {
    path: '/joblet.JobService/StreamJobTelemetry',
    requestStream: false,
    responseStream: true,
    requestType: joblet_pb.StreamTelemetryRequest,
    responseType: joblet_pb.TelemetryEvent,
    requestSerialize: serialize_joblet_StreamTelemetryRequest,
    requestDeserialize: deserialize_joblet_StreamTelemetryRequest,
    responseSerialize: serialize_joblet_TelemetryEvent,
    responseDeserialize: deserialize_joblet_TelemetryEvent,
  },
  // Get historical telemetry for a completed job
getJobTelemetry: {
    path: '/joblet.JobService/GetJobTelemetry',
    requestStream: false,
    responseStream: true,
    requestType: joblet_pb.GetTelemetryRequest,
    responseType: joblet_pb.TelemetryEvent,
    requestSerialize: serialize_joblet_GetTelemetryRequest,
    requestDeserialize: deserialize_joblet_GetTelemetryRequest,
    responseSerialize: serialize_joblet_TelemetryEvent,
    responseDeserialize: deserialize_joblet_TelemetryEvent,
  },
};

exports.JobServiceClient = grpc.makeGenericClientConstructor(JobServiceService, 'JobService');
// Network service
var NetworkServiceService = exports.NetworkServiceService = {
  createNetwork: {
    path: '/joblet.NetworkService/CreateNetwork',
    requestStream: false,
    responseStream: false,
    requestType: joblet_pb.CreateNetworkReq,
    responseType: joblet_pb.CreateNetworkRes,
    requestSerialize: serialize_joblet_CreateNetworkReq,
    requestDeserialize: deserialize_joblet_CreateNetworkReq,
    responseSerialize: serialize_joblet_CreateNetworkRes,
    responseDeserialize: deserialize_joblet_CreateNetworkRes,
  },
  listNetworks: {
    path: '/joblet.NetworkService/ListNetworks',
    requestStream: false,
    responseStream: false,
    requestType: joblet_pb.EmptyRequest,
    responseType: joblet_pb.Networks,
    requestSerialize: serialize_joblet_EmptyRequest,
    requestDeserialize: deserialize_joblet_EmptyRequest,
    responseSerialize: serialize_joblet_Networks,
    responseDeserialize: deserialize_joblet_Networks,
  },
  removeNetwork: {
    path: '/joblet.NetworkService/RemoveNetwork',
    requestStream: false,
    responseStream: false,
    requestType: joblet_pb.RemoveNetworkReq,
    responseType: joblet_pb.RemoveNetworkRes,
    requestSerialize: serialize_joblet_RemoveNetworkReq,
    requestDeserialize: deserialize_joblet_RemoveNetworkReq,
    responseSerialize: serialize_joblet_RemoveNetworkRes,
    responseDeserialize: deserialize_joblet_RemoveNetworkRes,
  },
};

exports.NetworkServiceClient = grpc.makeGenericClientConstructor(NetworkServiceService, 'NetworkService');
// Volume service
var VolumeServiceService = exports.VolumeServiceService = {
  createVolume: {
    path: '/joblet.VolumeService/CreateVolume',
    requestStream: false,
    responseStream: false,
    requestType: joblet_pb.CreateVolumeReq,
    responseType: joblet_pb.CreateVolumeRes,
    requestSerialize: serialize_joblet_CreateVolumeReq,
    requestDeserialize: deserialize_joblet_CreateVolumeReq,
    responseSerialize: serialize_joblet_CreateVolumeRes,
    responseDeserialize: deserialize_joblet_CreateVolumeRes,
  },
  listVolumes: {
    path: '/joblet.VolumeService/ListVolumes',
    requestStream: false,
    responseStream: false,
    requestType: joblet_pb.EmptyRequest,
    responseType: joblet_pb.Volumes,
    requestSerialize: serialize_joblet_EmptyRequest,
    requestDeserialize: deserialize_joblet_EmptyRequest,
    responseSerialize: serialize_joblet_Volumes,
    responseDeserialize: deserialize_joblet_Volumes,
  },
  removeVolume: {
    path: '/joblet.VolumeService/RemoveVolume',
    requestStream: false,
    responseStream: false,
    requestType: joblet_pb.RemoveVolumeReq,
    responseType: joblet_pb.RemoveVolumeRes,
    requestSerialize: serialize_joblet_RemoveVolumeReq,
    requestDeserialize: deserialize_joblet_RemoveVolumeReq,
    responseSerialize: serialize_joblet_RemoveVolumeRes,
    responseDeserialize: deserialize_joblet_RemoveVolumeRes,
  },
};

exports.VolumeServiceClient = grpc.makeGenericClientConstructor(VolumeServiceService, 'VolumeService');
// Monitoring service
var MonitoringServiceService = exports.MonitoringServiceService = {
  getSystemStatus: {
    path: '/joblet.MonitoringService/GetSystemStatus',
    requestStream: false,
    responseStream: false,
    requestType: joblet_pb.EmptyRequest,
    responseType: joblet_pb.SystemStatusRes,
    requestSerialize: serialize_joblet_EmptyRequest,
    requestDeserialize: deserialize_joblet_EmptyRequest,
    responseSerialize: serialize_joblet_SystemStatusRes,
    responseDeserialize: deserialize_joblet_SystemStatusRes,
  },
  streamSystemMetrics: {
    path: '/joblet.MonitoringService/StreamSystemMetrics',
    requestStream: false,
    responseStream: true,
    requestType: joblet_pb.StreamMetricsReq,
    responseType: joblet_pb.SystemMetricsRes,
    requestSerialize: serialize_joblet_StreamMetricsReq,
    requestDeserialize: deserialize_joblet_StreamMetricsReq,
    responseSerialize: serialize_joblet_SystemMetricsRes,
    responseDeserialize: deserialize_joblet_SystemMetricsRes,
  },
};

exports.MonitoringServiceClient = grpc.makeGenericClientConstructor(MonitoringServiceService, 'MonitoringService');
// Runtime service for managing execution environments
var RuntimeServiceService = exports.RuntimeServiceService = {
  listRuntimes: {
    path: '/joblet.RuntimeService/ListRuntimes',
    requestStream: false,
    responseStream: false,
    requestType: joblet_pb.EmptyRequest,
    responseType: joblet_pb.RuntimesRes,
    requestSerialize: serialize_joblet_EmptyRequest,
    requestDeserialize: deserialize_joblet_EmptyRequest,
    responseSerialize: serialize_joblet_RuntimesRes,
    responseDeserialize: deserialize_joblet_RuntimesRes,
  },
  getRuntimeInfo: {
    path: '/joblet.RuntimeService/GetRuntimeInfo',
    requestStream: false,
    responseStream: false,
    requestType: joblet_pb.RuntimeInfoReq,
    responseType: joblet_pb.RuntimeInfoRes,
    requestSerialize: serialize_joblet_RuntimeInfoReq,
    requestDeserialize: deserialize_joblet_RuntimeInfoReq,
    responseSerialize: serialize_joblet_RuntimeInfoRes,
    responseDeserialize: deserialize_joblet_RuntimeInfoRes,
  },
  testRuntime: {
    path: '/joblet.RuntimeService/TestRuntime',
    requestStream: false,
    responseStream: false,
    requestType: joblet_pb.RuntimeTestReq,
    responseType: joblet_pb.RuntimeTestRes,
    requestSerialize: serialize_joblet_RuntimeTestReq,
    requestDeserialize: deserialize_joblet_RuntimeTestReq,
    responseSerialize: serialize_joblet_RuntimeTestRes,
    responseDeserialize: deserialize_joblet_RuntimeTestRes,
  },
  installRuntimeFromGithub: {
    path: '/joblet.RuntimeService/InstallRuntimeFromGithub',
    requestStream: false,
    responseStream: false,
    requestType: joblet_pb.InstallRuntimeRequest,
    responseType: joblet_pb.InstallRuntimeResponse,
    requestSerialize: serialize_joblet_InstallRuntimeRequest,
    requestDeserialize: deserialize_joblet_InstallRuntimeRequest,
    responseSerialize: serialize_joblet_InstallRuntimeResponse,
    responseDeserialize: deserialize_joblet_InstallRuntimeResponse,
  },
  installRuntimeFromLocal: {
    path: '/joblet.RuntimeService/InstallRuntimeFromLocal',
    requestStream: false,
    responseStream: false,
    requestType: joblet_pb.InstallRuntimeFromLocalRequest,
    responseType: joblet_pb.InstallRuntimeResponse,
    requestSerialize: serialize_joblet_InstallRuntimeFromLocalRequest,
    requestDeserialize: deserialize_joblet_InstallRuntimeFromLocalRequest,
    responseSerialize: serialize_joblet_InstallRuntimeResponse,
    responseDeserialize: deserialize_joblet_InstallRuntimeResponse,
  },
  streamingInstallRuntimeFromGithub: {
    path: '/joblet.RuntimeService/StreamingInstallRuntimeFromGithub',
    requestStream: false,
    responseStream: true,
    requestType: joblet_pb.InstallRuntimeRequest,
    responseType: joblet_pb.RuntimeInstallationChunk,
    requestSerialize: serialize_joblet_InstallRuntimeRequest,
    requestDeserialize: deserialize_joblet_InstallRuntimeRequest,
    responseSerialize: serialize_joblet_RuntimeInstallationChunk,
    responseDeserialize: deserialize_joblet_RuntimeInstallationChunk,
  },
  streamingInstallRuntimeFromLocal: {
    path: '/joblet.RuntimeService/StreamingInstallRuntimeFromLocal',
    requestStream: false,
    responseStream: true,
    requestType: joblet_pb.InstallRuntimeFromLocalRequest,
    responseType: joblet_pb.RuntimeInstallationChunk,
    requestSerialize: serialize_joblet_InstallRuntimeFromLocalRequest,
    requestDeserialize: deserialize_joblet_InstallRuntimeFromLocalRequest,
    responseSerialize: serialize_joblet_RuntimeInstallationChunk,
    responseDeserialize: deserialize_joblet_RuntimeInstallationChunk,
  },
  validateRuntimeSpec: {
    path: '/joblet.RuntimeService/ValidateRuntimeSpec',
    requestStream: false,
    responseStream: false,
    requestType: joblet_pb.ValidateRuntimeSpecRequest,
    responseType: joblet_pb.ValidateRuntimeSpecResponse,
    requestSerialize: serialize_joblet_ValidateRuntimeSpecRequest,
    requestDeserialize: deserialize_joblet_ValidateRuntimeSpecRequest,
    responseSerialize: serialize_joblet_ValidateRuntimeSpecResponse,
    responseDeserialize: deserialize_joblet_ValidateRuntimeSpecResponse,
  },
  removeRuntime: {
    path: '/joblet.RuntimeService/RemoveRuntime',
    requestStream: false,
    responseStream: false,
    requestType: joblet_pb.RuntimeRemoveReq,
    responseType: joblet_pb.RuntimeRemoveRes,
    requestSerialize: serialize_joblet_RuntimeRemoveReq,
    requestDeserialize: deserialize_joblet_RuntimeRemoveReq,
    responseSerialize: serialize_joblet_RuntimeRemoveRes,
    responseDeserialize: deserialize_joblet_RuntimeRemoveRes,
  },
};

exports.RuntimeServiceClient = grpc.makeGenericClientConstructor(RuntimeServiceService, 'RuntimeService');
