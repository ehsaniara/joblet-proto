// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var joblet_pb = require('./joblet_pb.js');

function serialize_joblet_BuildRuntimeProgress(arg) {
  if (!(arg instanceof joblet_pb.BuildRuntimeProgress)) {
    throw new Error('Expected argument of type joblet.BuildRuntimeProgress');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_BuildRuntimeProgress(buffer_arg) {
  return joblet_pb.BuildRuntimeProgress.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_BuildRuntimeRequest(arg) {
  if (!(arg instanceof joblet_pb.BuildRuntimeRequest)) {
    throw new Error('Expected argument of type joblet.BuildRuntimeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_BuildRuntimeRequest(buffer_arg) {
  return joblet_pb.BuildRuntimeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

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

function serialize_joblet_GetJobMetricsRequest(arg) {
  if (!(arg instanceof joblet_pb.GetJobMetricsRequest)) {
    throw new Error('Expected argument of type joblet.GetJobMetricsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_GetJobMetricsRequest(buffer_arg) {
  return joblet_pb.GetJobMetricsRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_joblet_GetJobTelematicsRequest(arg) {
  if (!(arg instanceof joblet_pb.GetJobTelematicsRequest)) {
    throw new Error('Expected argument of type joblet.GetJobTelematicsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_GetJobTelematicsRequest(buffer_arg) {
  return joblet_pb.GetJobTelematicsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_JobMetricsEvent(arg) {
  if (!(arg instanceof joblet_pb.JobMetricsEvent)) {
    throw new Error('Expected argument of type joblet.JobMetricsEvent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_JobMetricsEvent(buffer_arg) {
  return joblet_pb.JobMetricsEvent.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_joblet_StreamJobMetricsRequest(arg) {
  if (!(arg instanceof joblet_pb.StreamJobMetricsRequest)) {
    throw new Error('Expected argument of type joblet.StreamJobMetricsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_StreamJobMetricsRequest(buffer_arg) {
  return joblet_pb.StreamJobMetricsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_StreamJobTelematicsRequest(arg) {
  if (!(arg instanceof joblet_pb.StreamJobTelematicsRequest)) {
    throw new Error('Expected argument of type joblet.StreamJobTelematicsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_StreamJobTelematicsRequest(buffer_arg) {
  return joblet_pb.StreamJobTelematicsRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_joblet_TelematicsEvent(arg) {
  if (!(arg instanceof joblet_pb.TelematicsEvent)) {
    throw new Error('Expected argument of type joblet.TelematicsEvent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_TelematicsEvent(buffer_arg) {
  return joblet_pb.TelematicsEvent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_ValidateRuntimeYAMLRequest(arg) {
  if (!(arg instanceof joblet_pb.ValidateRuntimeYAMLRequest)) {
    throw new Error('Expected argument of type joblet.ValidateRuntimeYAMLRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_ValidateRuntimeYAMLRequest(buffer_arg) {
  return joblet_pb.ValidateRuntimeYAMLRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_joblet_ValidateRuntimeYAMLResponse(arg) {
  if (!(arg instanceof joblet_pb.ValidateRuntimeYAMLResponse)) {
    throw new Error('Expected argument of type joblet.ValidateRuntimeYAMLResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_joblet_ValidateRuntimeYAMLResponse(buffer_arg) {
  return joblet_pb.ValidateRuntimeYAMLResponse.deserializeBinary(new Uint8Array(buffer_arg));
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
  // Job Metrics (resource usage from cgroups - sampled every 5s)
// Stream live metrics for a running job
streamJobMetrics: {
    path: '/joblet.JobService/StreamJobMetrics',
    requestStream: false,
    responseStream: true,
    requestType: joblet_pb.StreamJobMetricsRequest,
    responseType: joblet_pb.JobMetricsEvent,
    requestSerialize: serialize_joblet_StreamJobMetricsRequest,
    requestDeserialize: deserialize_joblet_StreamJobMetricsRequest,
    responseSerialize: serialize_joblet_JobMetricsEvent,
    responseDeserialize: deserialize_joblet_JobMetricsEvent,
  },
  // Get historical metrics for a completed job
getJobMetrics: {
    path: '/joblet.JobService/GetJobMetrics',
    requestStream: false,
    responseStream: true,
    requestType: joblet_pb.GetJobMetricsRequest,
    responseType: joblet_pb.JobMetricsEvent,
    requestSerialize: serialize_joblet_GetJobMetricsRequest,
    requestDeserialize: deserialize_joblet_GetJobMetricsRequest,
    responseSerialize: serialize_joblet_JobMetricsEvent,
    responseDeserialize: deserialize_joblet_JobMetricsEvent,
  },
  // Job Telematics (eBPF security events - event-driven)
// Stream live telematics events for a running job
streamJobTelematics: {
    path: '/joblet.JobService/StreamJobTelematics',
    requestStream: false,
    responseStream: true,
    requestType: joblet_pb.StreamJobTelematicsRequest,
    responseType: joblet_pb.TelematicsEvent,
    requestSerialize: serialize_joblet_StreamJobTelematicsRequest,
    requestDeserialize: deserialize_joblet_StreamJobTelematicsRequest,
    responseSerialize: serialize_joblet_TelematicsEvent,
    responseDeserialize: deserialize_joblet_TelematicsEvent,
  },
  // Get historical telematics events for a completed job
getJobTelematics: {
    path: '/joblet.JobService/GetJobTelematics',
    requestStream: false,
    responseStream: true,
    requestType: joblet_pb.GetJobTelematicsRequest,
    responseType: joblet_pb.TelematicsEvent,
    requestSerialize: serialize_joblet_GetJobTelematicsRequest,
    requestDeserialize: deserialize_joblet_GetJobTelematicsRequest,
    responseSerialize: serialize_joblet_TelematicsEvent,
    responseDeserialize: deserialize_joblet_TelematicsEvent,
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
  // BuildRuntime builds a runtime from a YAML specification
// The build process runs on the server and streams progress back to the client
buildRuntime: {
    path: '/joblet.RuntimeService/BuildRuntime',
    requestStream: false,
    responseStream: true,
    requestType: joblet_pb.BuildRuntimeRequest,
    responseType: joblet_pb.BuildRuntimeProgress,
    requestSerialize: serialize_joblet_BuildRuntimeRequest,
    requestDeserialize: deserialize_joblet_BuildRuntimeRequest,
    responseSerialize: serialize_joblet_BuildRuntimeProgress,
    responseDeserialize: deserialize_joblet_BuildRuntimeProgress,
  },
  // ValidateRuntimeYAML validates a runtime YAML specification without building
validateRuntimeYAML: {
    path: '/joblet.RuntimeService/ValidateRuntimeYAML',
    requestStream: false,
    responseStream: false,
    requestType: joblet_pb.ValidateRuntimeYAMLRequest,
    responseType: joblet_pb.ValidateRuntimeYAMLResponse,
    requestSerialize: serialize_joblet_ValidateRuntimeYAMLRequest,
    requestDeserialize: deserialize_joblet_ValidateRuntimeYAMLRequest,
    responseSerialize: serialize_joblet_ValidateRuntimeYAMLResponse,
    responseDeserialize: deserialize_joblet_ValidateRuntimeYAMLResponse,
  },
};

exports.RuntimeServiceClient = grpc.makeGenericClientConstructor(RuntimeServiceService, 'RuntimeService');
