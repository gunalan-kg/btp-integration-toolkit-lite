"use strict";

const cds = require("@sap/cds");
const logger = require("../utils/logger");
const { EventLogs } = cds.entities('com.sap.pgp.dev.ItkApp');

async function doCreateRealmTemplates(req){
  console.log("Inside doCreateRealmMapping");
  debugger;
  const entities = req.data.entities;
  const srv = cds.transaction(req);
  const results = await Promise.all(entities.map(async (entity) => {
   return await srv.create('com.sap.pgp.dev.ItkApp.RealmMapping',entity)
  }));
  console.log("result value",results);
   logger.info(`ITK: Realm Mapping  ${results.length} entities created successfully.`);
 
  
}

async function doCreateFTPTemplates(req){
  
  debugger;
  const entities = req.data.entities;
  const srv = cds.transaction(req);

  const results = await Promise.all(entities.map(async (entity) => {
   return await srv.create('com.sap.pgp.dev.ItkApp.FTPServer',entity)
  }));
   
  logger.info(`ITK: FTP Server  ${results.length} entities created successfully.`);
 
  
}
async function doCreateImportTemplates(req){
  
  debugger;
  const entities = req.data.entities;
  const srv = cds.transaction(req);

  const results = await Promise.all(entities.map(async (entity) => {
   return await srv.create('com.sap.pgp.dev.ItkApp.ImportEvents',entity)
  }));
   
  logger.info(`ITK: Import Events  ${results.length} entities created successfully.`);
 
  
}
async function doCreateSpendVizTemplates(req){
  
  debugger;
  const entities = req.data.entities;
  const srv = cds.transaction(req);

  const results = await Promise.all(entities.map(async (entity) => {
   return await srv.create('com.sap.pgp.dev.ItkApp.SpendVizEvents',entity)
  }));
   
  logger.info(`ITK: Spend Viz  ${results.length} entities created successfully.`);
 
  
}
async function doCreateMiscTemplates(req){
  
  debugger;
  const entities = req.data.entities;
  const srv = cds.transaction(req);

  const results = await Promise.all(entities.map(async (entity) => {
   return await srv.create('com.sap.pgp.dev.ItkApp.MiscDetails',entity)
  }));
   
  logger.info(`ITK: Misc SMTP Details  ${results.length} entities created successfully.`);
 
  
}
async function doCreateSSTemplates(req){
  
  debugger;
  const entities = req.data.entities;
  const srv = cds.transaction(req);

  const results = await Promise.all(entities.map(async (entity) => {
   return await srv.create('com.sap.pgp.dev.ItkApp.SharedSecret',entity)
  }));
   
  logger.info(`ITK: Shared Secret  ${results.length} entities created successfully.`);
 
  
}

async function doCreateExportTemplates(req){
  
  debugger;
  const entities = req.data.entities;
  const srv = cds.transaction(req);

  const results = await Promise.all(entities.map(async (entity) => {
   return await srv.create('com.sap.pgp.dev.ItkApp.ExportEvents',entity)
  }));
   
  logger.info(`ITK: Export Events ${results.length} entities created successfully.`);
 
  
}

async function doDeleteRealmTemplates(req){
  
  debugger;
  const entities = req.data.entities;
  const srv = cds.transaction(req);

  const results = await Promise.all(entities.map(async (entity) => {
   return await srv.delete('com.sap.pgp.dev.ItkApp.RealmMapping',entity)
  }));
   
   logger.info(`ITK: Realm Mapping  ${results.length} entities deleted successfully.`);
 
  
}

async function doDeleteFTPTemplates(req){
  
  debugger;
  const entities = req.data.entities;
  const srv = cds.transaction(req);

  const results = await Promise.all(entities.map(async (entity) => {
   return await srv.delete('com.sap.pgp.dev.ItkApp.FTPServer',entity)
  }));
   
  logger.info(`ITK: FTP Server  ${results.length} entities deleted successfully.`);
 
  
}
async function doDeleteImportTemplates(req){
  
  debugger;
  const entities = req.data.entities;
  const srv = cds.transaction(req);

  const results = await Promise.all(entities.map(async (entity) => {
   return await srv.delete('com.sap.pgp.dev.ItkApp.ImportEvents',entity)
  }));
   
  logger.info(`ITK: Import Events  ${results.length} entities deleted successfully.`);
 
  
}
async function doDeleteSpendVizTemplates(req){
  
  debugger;
  const entities = req.data.entities;
  const srv = cds.transaction(req);

  const results = await Promise.all(entities.map(async (entity) => {
   return await srv.delete('com.sap.pgp.dev.ItkApp.SpendVizEvents',entity)
  }));
   
  logger.info(`ITK: Spend Viz  ${results.length} entities deleted successfully.`);
 
  
}
async function doDeleteMiscTemplates(req){
  
  debugger;
  const entities = req.data.entities;
  const srv = cds.transaction(req);

  const results = await Promise.all(entities.map(async (entity) => {
   return await srv.delete('com.sap.pgp.dev.ItkApp.MiscDetails',entity)
  }));
   
  logger.info(`ITK: Misc SMTP Details  ${results.length} entities deleted successfully.`);
 
  
}
async function doDeleteSSTemplates(req){
  
  debugger;
  const entities = req.data.entities;
  const srv = cds.transaction(req);

  const results = await Promise.all(entities.map(async (entity) => {
   return await srv.delete('com.sap.pgp.dev.ItkApp.SharedSecret',entity)
  }));
   
  logger.info(`ITK: Shared Secret  ${results.length} entities deleted successfully.`);
 
  
}

async function doDeleteExportTemplates(req){
  
  debugger;
  const entities = req.data.entities;
  const srv = cds.transaction(req);

  const results = await Promise.all(entities.map(async (entity) => {
   return await srv.delete('com.sap.pgp.dev.ItkApp.ExportEvents',entity)
  }));
   
  logger.info(`ITK: Export Events ${results.length} entities deleted successfully.`);
 
  
}

async function doDeleteTransactionData(req){
  
  
  debugger;
  
  let oData = req.data;
  
  let realm = oData.realm;

  // const entities = req.data.entities;
  const srv = cds.transaction(req);
  let OrigTransaction = await SELECT.from(EventLogs).where({realm : realm});
  let OldTransactions = OrigTransaction.slice();
  const currentTime = new Date().getTime();
  const thirtyDaysAgo = Math.floor((currentTime - (30 * 24 * 60 * 60 * 1000))/ 1000);

  for (const entry of OrigTransaction)
  {
    const index = OldTransactions.indexOf(entry);

    if (entry.TransactionDate >= thirtyDaysAgo)
    {
     OldTransactions.splice(index,1)
    }

  }

  const results = await Promise.all(OldTransactions.map(async (entity) => {
    return await srv.delete('com.sap.pgp.dev.ItkApp.EventLogs',entity)
   }));

  logger.info(`ITK: Transaction Data  ${results.length} entries deleted successfully.`);
 
  
}
module.exports = {
  doCreateRealmTemplates,
  doCreateFTPTemplates,
  doCreateImportTemplates,
  doCreateSpendVizTemplates,
  doCreateMiscTemplates,
  doCreateSSTemplates,
  doCreateExportTemplates,
  doDeleteRealmTemplates,
  doDeleteFTPTemplates,
  doDeleteImportTemplates,
  doDeleteExportTemplates,
  doDeleteSpendVizTemplates,
  doDeleteMiscTemplates,
  doDeleteSSTemplates,
  doDeleteTransactionData

};

