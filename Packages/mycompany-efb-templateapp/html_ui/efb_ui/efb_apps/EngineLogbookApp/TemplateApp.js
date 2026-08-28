"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // global-externals:@microsoft/msfs-sdk
  var require_msfs_sdk = __commonJS({
    "global-externals:@microsoft/msfs-sdk"(exports, module) {
      module.exports = msfssdk;
    }
  });

  // src/TemplateApp.tsx
  var import_msfs_sdk = __toESM(require_msfs_sdk());

  // src/aircraftProfiles.ts
  var DC3 = {
    id: "dc3",
    displayName: "Douglas DC-3",
    shortName: "DC-3",
    titleMatches: ["dc-3", "dc3", "douglas dc-3"],
    engineIndices: [1, 2],
    emptyWeightLb: 16865,
    maxGrossWeightLb: 25200,
    maxLandingWeightLb: 25200,
    redlines: { oilTempC: 95, oilTempTransientC: 105, chtC: 225, oilPressLowPsi: 70, oilPressHighPsi: 100, manifoldPressInHg: 48, rpm: 2700 },
    takeoffPowerTimeLimitMin: 5,
    oilPressureStartupGraceSec: 30,
    oilPressureMinRpmToCheck: 1e3,
    wearPerRunningHour: 0.4,
    wearPerExceedanceSample: 0.8,
    wearPerHardExceedance: 3,
    wearWarnThreshold: 60,
    wearRoughRunningThreshold: 75,
    wearFailureRiskThreshold: 90,
    failureChanceAtMaxWear: 0.6,
    oilCapacityQuarts: 29,
    oilConsumptionQtPerHour: 0.3,
    oilLeakQtPerHourWhenDamaged: 2,
    oilLeakStartsAtWearPercent: 70,
    oilLowWarningPercent: 40,
    oilCriticalPercent: 15,
    oilCriticalWearMultiplier: 2.5,
    fuelPressLowPsi: 15,
    fuelPressHighPsi: 18,
    fuelPumpWearPerRunningHour: 0.3,
    fuelPumpWearPerPressureExceedance: 1,
    fuelPumpWarnThreshold: 65,
    fuelPumpFailureRiskThreshold: 92,
    fuelPumpFailureChanceAtMaxWear: 0.5,
    vfeKias: 97,
    flapOverspeedMarginSevereKias: 15,
    flapWearPerOverspeedSample: 4,
    flapWearPerSevereOverspeed: 12,
    flapWearPerCycle: 0.15,
    flapWarnThreshold: 50,
    flapJamRiskThreshold: 85,
    flapJamChanceAtMaxWear: 0.4,
    vleKias: 202,
    gearWearPerOverspeedSample: 4,
    gearWearPerCycle: 0.2,
    landingVsFirmFpm: 600,
    landingVsHardFpm: 900,
    landingVsSevereFpm: 1200,
    gearWearPerFirmLanding: 2,
    gearWearPerHardLanding: 10,
    gearWearPerSevereLanding: 30,
    gearWearOverweightMultiplier: 1.5,
    gearWarnThreshold: 50,
    gearJamRiskThreshold: 85,
    gearJamChanceAtMaxWear: 0.35,
    brakeUseGroundSpeedMinKt: 3,
    brakeHardBrakingSpeedKt: 40,
    brakeHardBrakingApplicationPct: 50,
    brakeWearPerUseSample: 0.3,
    brakeWearPerHardBrakeSample: 1.5,
    brakeWarnThreshold: 55,
    brakeFadeRiskThreshold: 85,
    brakeFadeChanceAtMaxWear: 0.4,
    brakeFadeEffectivenessCapPercent: 55,
    tireWearPerCycle: 8,
    tireWearPerHardLandingBonus: 15,
    tireWarnThreshold: 60,
    tireBlowoutRiskThreshold: 90,
    tireBlowoutChanceAtMaxWear: 0.3,
    lightLifeHours: { landing_taxi: 60, nav_beacon: 500 },
    lightWarnLifeFraction: 0.7,
    lightBurnoutChancePerHourPastLife: 0.05,
    hydraulicWearPerGearCycle: 0.3,
    hydraulicWearPerFlapCycle: 0.15,
    hydraulicWarnThreshold: 55,
    hydraulicFailureRiskThreshold: 88,
    hydraulicFailureChanceAtMaxWear: 0.35,
    batteryWearPerEngineStart: 3,
    batteryWearPerRunningHour: 0.1,
    batteryRechargePerHour: 1.5,
    batteryWarnThreshold: 55,
    batteryWeakRiskThreshold: 88,
    batteryWeakChanceAtMaxWear: 0.35,
    engineTboHours: 1500,
    engineOverdueWearMultiplier: 2,
    airframeOverhaulHours: 6e3,
    hundredHourCheckIntervalHours: 100,
    hundredHourCheckGraceHours: 10,
    hundredHourOverdueWearMultiplier: 1.5,
    currencySymbol: "$",
    oilCostPerQuart: 12,
    repairCosts: {
      engine_repair: { min: 400, max: 2500 },
      fuel_pump_service: { min: 150, max: 650 },
      flap_repair: { min: 200, max: 900 },
      gear_repair: { min: 250, max: 1200 },
      brake_repair: { min: 120, max: 500 },
      tire_replacement: { min: 100, max: 350 },
      light_repair_landing_taxi: { min: 15, max: 40 },
      light_repair_nav_beacon: { min: 20, max: 60 },
      hydraulic_service: { min: 250, max: 1100 },
      battery_replacement: { min: 100, max: 400 },
      engine_overhaul: 18e3,
      airframe_overhaul: 45e3,
      hundred_hour_check: 1800
    }
  };
  var C46 = {
    id: "c46",
    displayName: "Curtiss C-46 Commando",
    shortName: "C-46",
    titleMatches: ["c-46", "c46", "commando"],
    engineIndices: [1, 2],
    emptyWeightLb: 32e3,
    maxGrossWeightLb: 48e3,
    maxLandingWeightLb: 48e3,
    redlines: { oilTempC: 85, oilTempTransientC: 110, chtC: 232, oilPressLowPsi: 40, oilPressHighPsi: 90, manifoldPressInHg: 54, rpm: 2700 },
    takeoffPowerTimeLimitMin: 5,
    oilPressureStartupGraceSec: 30,
    oilPressureMinRpmToCheck: 1e3,
    wearPerRunningHour: 0.4,
    wearPerExceedanceSample: 0.8,
    wearPerHardExceedance: 3,
    wearWarnThreshold: 60,
    wearRoughRunningThreshold: 75,
    wearFailureRiskThreshold: 90,
    failureChanceAtMaxWear: 0.6,
    oilCapacityQuarts: 34,
    oilConsumptionQtPerHour: 0.35,
    oilLeakQtPerHourWhenDamaged: 2.5,
    oilLeakStartsAtWearPercent: 70,
    oilLowWarningPercent: 40,
    oilCriticalPercent: 15,
    oilCriticalWearMultiplier: 2.5,
    fuelPressLowPsi: 14,
    fuelPressHighPsi: 18,
    fuelPumpWearPerRunningHour: 0.3,
    fuelPumpWearPerPressureExceedance: 1,
    fuelPumpWarnThreshold: 65,
    fuelPumpFailureRiskThreshold: 92,
    fuelPumpFailureChanceAtMaxWear: 0.5,
    vfeKias: 117,
    flapOverspeedMarginSevereKias: 15,
    flapWearPerOverspeedSample: 4,
    flapWearPerSevereOverspeed: 12,
    flapWearPerCycle: 0.15,
    flapWarnThreshold: 50,
    flapJamRiskThreshold: 85,
    flapJamChanceAtMaxWear: 0.4,
    vleKias: 130,
    gearWearPerOverspeedSample: 4,
    gearWearPerCycle: 0.2,
    landingVsFirmFpm: 600,
    landingVsHardFpm: 900,
    landingVsSevereFpm: 1200,
    gearWearPerFirmLanding: 2,
    gearWearPerHardLanding: 10,
    gearWearPerSevereLanding: 30,
    gearWearOverweightMultiplier: 1.5,
    gearWarnThreshold: 50,
    gearJamRiskThreshold: 85,
    gearJamChanceAtMaxWear: 0.35,
    brakeUseGroundSpeedMinKt: 3,
    brakeHardBrakingSpeedKt: 40,
    brakeHardBrakingApplicationPct: 50,
    brakeWearPerUseSample: 0.3,
    brakeWearPerHardBrakeSample: 1.5,
    brakeWarnThreshold: 55,
    brakeFadeRiskThreshold: 85,
    brakeFadeChanceAtMaxWear: 0.4,
    brakeFadeEffectivenessCapPercent: 55,
    tireWearPerCycle: 8,
    tireWearPerHardLandingBonus: 15,
    tireWarnThreshold: 60,
    tireBlowoutRiskThreshold: 90,
    tireBlowoutChanceAtMaxWear: 0.3,
    lightLifeHours: { landing_taxi: 60, nav_beacon: 500 },
    lightWarnLifeFraction: 0.7,
    lightBurnoutChancePerHourPastLife: 0.05,
    hydraulicWearPerGearCycle: 0.3,
    hydraulicWearPerFlapCycle: 0.15,
    hydraulicWarnThreshold: 55,
    hydraulicFailureRiskThreshold: 88,
    hydraulicFailureChanceAtMaxWear: 0.35,
    batteryWearPerEngineStart: 3,
    batteryWearPerRunningHour: 0.1,
    batteryRechargePerHour: 1.5,
    batteryWarnThreshold: 55,
    batteryWeakRiskThreshold: 88,
    batteryWeakChanceAtMaxWear: 0.35,
    engineTboHours: 2400,
    engineOverdueWearMultiplier: 2,
    airframeOverhaulHours: 6e3,
    hundredHourCheckIntervalHours: 100,
    hundredHourCheckGraceHours: 10,
    hundredHourOverdueWearMultiplier: 1.5,
    currencySymbol: "$",
    oilCostPerQuart: 14,
    repairCosts: {
      engine_repair: { min: 500, max: 3200 },
      fuel_pump_service: { min: 180, max: 800 },
      flap_repair: { min: 250, max: 1150 },
      gear_repair: { min: 330, max: 1600 },
      brake_repair: { min: 155, max: 650 },
      tire_replacement: { min: 140, max: 500 },
      light_repair_landing_taxi: { min: 18, max: 50 },
      light_repair_nav_beacon: { min: 25, max: 75 },
      hydraulic_service: { min: 330, max: 1450 },
      battery_replacement: { min: 125, max: 500 },
      engine_overhaul: 24e3,
      airframe_overhaul: 58e3,
      hundred_hour_check: 2400
    }
  };
  var BEECH18 = {
    id: "beech18",
    displayName: "Beechcraft D18S",
    shortName: "Beech 18",
    titleMatches: ["d18s", "d-18s", "beech 18", "beechcraft model 18", "twin beech", "beechcraft d18s"],
    engineIndices: [1, 2],
    emptyWeightLb: 5770,
    maxGrossWeightLb: 8750,
    maxLandingWeightLb: 8750,
    redlines: { oilTempC: 90, oilTempTransientC: 100, chtC: 232, oilPressLowPsi: 70, oilPressHighPsi: 100, manifoldPressInHg: 36.5, rpm: 2300 },
    takeoffPowerTimeLimitMin: 1,
    oilPressureStartupGraceSec: 30,
    oilPressureMinRpmToCheck: 1e3,
    wearPerRunningHour: 0.4,
    wearPerExceedanceSample: 0.8,
    wearPerHardExceedance: 3,
    wearWarnThreshold: 60,
    wearRoughRunningThreshold: 75,
    wearFailureRiskThreshold: 90,
    failureChanceAtMaxWear: 0.6,
    oilCapacityQuarts: 29,
    oilConsumptionQtPerHour: 0.3,
    oilLeakQtPerHourWhenDamaged: 2,
    oilLeakStartsAtWearPercent: 70,
    oilLowWarningPercent: 40,
    oilCriticalPercent: 15,
    oilCriticalWearMultiplier: 2.5,
    fuelPressLowPsi: 14,
    fuelPressHighPsi: 18,
    fuelPumpWearPerRunningHour: 0.3,
    fuelPumpWearPerPressureExceedance: 1,
    fuelPumpWarnThreshold: 65,
    fuelPumpFailureRiskThreshold: 92,
    fuelPumpFailureChanceAtMaxWear: 0.5,
    vfeKias: 104,
    flapOverspeedMarginSevereKias: 15,
    flapWearPerOverspeedSample: 4,
    flapWearPerSevereOverspeed: 12,
    flapWearPerCycle: 0.15,
    flapWarnThreshold: 50,
    flapJamRiskThreshold: 85,
    flapJamChanceAtMaxWear: 0.4,
    vleKias: 109,
    gearWearPerOverspeedSample: 4,
    gearWearPerCycle: 0.2,
    landingVsFirmFpm: 600,
    landingVsHardFpm: 900,
    landingVsSevereFpm: 1200,
    gearWearPerFirmLanding: 2,
    gearWearPerHardLanding: 10,
    gearWearPerSevereLanding: 30,
    gearWearOverweightMultiplier: 1.5,
    gearWarnThreshold: 50,
    gearJamRiskThreshold: 85,
    gearJamChanceAtMaxWear: 0.35,
    brakeUseGroundSpeedMinKt: 3,
    brakeHardBrakingSpeedKt: 40,
    brakeHardBrakingApplicationPct: 50,
    brakeWearPerUseSample: 0.3,
    brakeWearPerHardBrakeSample: 1.5,
    brakeWarnThreshold: 55,
    brakeFadeRiskThreshold: 85,
    brakeFadeChanceAtMaxWear: 0.4,
    brakeFadeEffectivenessCapPercent: 55,
    tireWearPerCycle: 8,
    tireWearPerHardLandingBonus: 15,
    tireWarnThreshold: 60,
    tireBlowoutRiskThreshold: 90,
    tireBlowoutChanceAtMaxWear: 0.3,
    lightLifeHours: { landing_taxi: 60, nav_beacon: 500 },
    lightWarnLifeFraction: 0.7,
    lightBurnoutChancePerHourPastLife: 0.05,
    hydraulicWearPerGearCycle: 0.3,
    hydraulicWearPerFlapCycle: 0.15,
    hydraulicWarnThreshold: 55,
    hydraulicFailureRiskThreshold: 88,
    hydraulicFailureChanceAtMaxWear: 0.35,
    batteryWearPerEngineStart: 3,
    batteryWearPerRunningHour: 0.1,
    batteryRechargePerHour: 1.5,
    batteryWarnThreshold: 55,
    batteryWeakRiskThreshold: 88,
    batteryWeakChanceAtMaxWear: 0.35,
    engineTboHours: 1200,
    engineOverdueWearMultiplier: 2,
    airframeOverhaulHours: 6e3,
    hundredHourCheckIntervalHours: 100,
    hundredHourCheckGraceHours: 10,
    hundredHourOverdueWearMultiplier: 1.5,
    currencySymbol: "$",
    oilCostPerQuart: 11,
    repairCosts: {
      engine_repair: { min: 350, max: 2200 },
      fuel_pump_service: { min: 130, max: 550 },
      flap_repair: { min: 170, max: 750 },
      gear_repair: { min: 220, max: 1e3 },
      brake_repair: { min: 100, max: 420 },
      tire_replacement: { min: 90, max: 300 },
      light_repair_landing_taxi: { min: 12, max: 35 },
      light_repair_nav_beacon: { min: 18, max: 50 },
      hydraulic_service: { min: 200, max: 900 },
      battery_replacement: { min: 90, max: 350 },
      engine_overhaul: 15e3,
      airframe_overhaul: 38e3,
      hundred_hour_check: 1500
    }
  };
  var DUKE = {
    id: "duke",
    displayName: "Beechcraft B60 Duke",
    shortName: "Duke",
    titleMatches: ["b60 duke", "grand duke", "beechcraft duke", "beech duke", "piston duke", "duke 60"],
    engineIndices: [1, 2],
    emptyWeightLb: 4275,
    maxGrossWeightLb: 6775,
    maxLandingWeightLb: 6600,
    redlines: { oilTempC: 118, oilTempTransientC: 125, chtC: 246, oilPressLowPsi: 25, oilPressHighPsi: 100, manifoldPressInHg: 41.5, rpm: 2900 },
    takeoffPowerTimeLimitMin: 5,
    oilPressureStartupGraceSec: 30,
    oilPressureMinRpmToCheck: 1200,
    wearPerRunningHour: 0.4,
    wearPerExceedanceSample: 0.8,
    wearPerHardExceedance: 3,
    wearWarnThreshold: 60,
    wearRoughRunningThreshold: 75,
    wearFailureRiskThreshold: 90,
    failureChanceAtMaxWear: 0.6,
    oilCapacityQuarts: 13,
    oilConsumptionQtPerHour: 0.25,
    oilLeakQtPerHourWhenDamaged: 1.5,
    oilLeakStartsAtWearPercent: 70,
    oilLowWarningPercent: 40,
    oilCriticalPercent: 15,
    oilCriticalWearMultiplier: 2.5,
    fuelPressLowPsi: 14,
    fuelPressHighPsi: 18,
    fuelPumpWearPerRunningHour: 0.3,
    fuelPumpWearPerPressureExceedance: 1,
    fuelPumpWarnThreshold: 65,
    fuelPumpFailureRiskThreshold: 92,
    fuelPumpFailureChanceAtMaxWear: 0.5,
    vfeKias: 140,
    flapOverspeedMarginSevereKias: 15,
    flapWearPerOverspeedSample: 4,
    flapWearPerSevereOverspeed: 12,
    flapWearPerCycle: 0.15,
    flapWarnThreshold: 50,
    flapJamRiskThreshold: 85,
    flapJamChanceAtMaxWear: 0.4,
    vleKias: 174,
    gearWearPerOverspeedSample: 4,
    gearWearPerCycle: 0.2,
    landingVsFirmFpm: 600,
    landingVsHardFpm: 900,
    landingVsSevereFpm: 1200,
    gearWearPerFirmLanding: 2,
    gearWearPerHardLanding: 10,
    gearWearPerSevereLanding: 30,
    gearWearOverweightMultiplier: 1.5,
    gearWarnThreshold: 50,
    gearJamRiskThreshold: 85,
    gearJamChanceAtMaxWear: 0.35,
    brakeUseGroundSpeedMinKt: 3,
    brakeHardBrakingSpeedKt: 40,
    brakeHardBrakingApplicationPct: 50,
    brakeWearPerUseSample: 0.3,
    brakeWearPerHardBrakeSample: 1.5,
    brakeWarnThreshold: 55,
    brakeFadeRiskThreshold: 85,
    brakeFadeChanceAtMaxWear: 0.4,
    brakeFadeEffectivenessCapPercent: 55,
    tireWearPerCycle: 8,
    tireWearPerHardLandingBonus: 15,
    tireWarnThreshold: 60,
    tireBlowoutRiskThreshold: 90,
    tireBlowoutChanceAtMaxWear: 0.3,
    lightLifeHours: { landing_taxi: 60, nav_beacon: 500 },
    lightWarnLifeFraction: 0.7,
    lightBurnoutChancePerHourPastLife: 0.05,
    hydraulicWearPerGearCycle: 0.3,
    hydraulicWearPerFlapCycle: 0.15,
    hydraulicWarnThreshold: 55,
    hydraulicFailureRiskThreshold: 88,
    hydraulicFailureChanceAtMaxWear: 0.35,
    batteryWearPerEngineStart: 3,
    batteryWearPerRunningHour: 0.1,
    batteryRechargePerHour: 1.5,
    batteryWarnThreshold: 55,
    batteryWeakRiskThreshold: 88,
    batteryWeakChanceAtMaxWear: 0.35,
    engineTboHours: 1600,
    engineOverdueWearMultiplier: 2,
    airframeOverhaulHours: 6e3,
    hundredHourCheckIntervalHours: 100,
    hundredHourCheckGraceHours: 10,
    hundredHourOverdueWearMultiplier: 1.5,
    currencySymbol: "$",
    oilCostPerQuart: 13,
    repairCosts: {
      engine_repair: { min: 600, max: 3600 },
      fuel_pump_service: { min: 200, max: 850 },
      flap_repair: { min: 250, max: 1100 },
      gear_repair: { min: 350, max: 1650 },
      brake_repair: { min: 150, max: 620 },
      tire_replacement: { min: 120, max: 400 },
      light_repair_landing_taxi: { min: 15, max: 42 },
      light_repair_nav_beacon: { min: 22, max: 65 },
      hydraulic_service: { min: 280, max: 1250 },
      battery_replacement: { min: 110, max: 450 },
      engine_overhaul: 26e3,
      airframe_overhaul: 42e3,
      hundred_hour_check: 2100
    }
  };
  var AIRCRAFT_PROFILES = {
    dc3: DC3,
    c46: C46,
    beech18: BEECH18,
    duke: DUKE
  };
  var AIRCRAFT_ORDER = ["dc3", "c46", "beech18", "duke"];
  function detectProfileFromTitle(title) {
    const lower = title.toLowerCase();
    for (const id of AIRCRAFT_ORDER) {
      const profile = AIRCRAFT_PROFILES[id];
      if (profile.titleMatches.some((m) => lower.includes(m))) {
        return profile;
      }
    }
    return null;
  }
  __name(detectProfileFromTitle, "detectProfileFromTitle");
  function computeRepairCost(profile, key, wearFraction) {
    const entry = profile.repairCosts[key];
    if (entry === void 0) return 0;
    if (typeof entry === "number") return entry;
    const frac = wearFraction === void 0 ? 0 : Math.max(0, Math.min(1, wearFraction));
    return entry.min + (entry.max - entry.min) * frac;
  }
  __name(computeRepairCost, "computeRepairCost");

  // src/wearModel.ts
  function createLogbook(profile, tailNumber2, title) {
    const engines = {};
    for (const idx of profile.engineIndices) {
      engines[idx] = {
        totalHours: 0,
        wearPercent: 0,
        oilQuantityPercent: 100,
        fuelPumpWearPercent: 0,
        exceedanceCount: 0,
        failureCount: 0,
        failed: false,
        lastFailureReason: null
      };
    }
    return {
      tailNumber: tailNumber2,
      title,
      aircraftId: profile.id,
      created: (/* @__PURE__ */ new Date()).toISOString(),
      totalCycles: 0,
      engines,
      airframe: {
        flapWearPercent: 0,
        flapJammed: false,
        gearWearPercent: 0,
        gearJammed: false,
        hardLandingCount: 0,
        lastLandingVsFpm: null,
        brakeWearPercent: 0,
        brakeFaded: false,
        brakeHardUseCount: 0,
        tireWearPercent: 0,
        tireCycleCount: 0,
        tireBlown: false,
        lightHours: { landing_taxi: 0, nav_beacon: 0 },
        lightBurnedOut: { landing_taxi: false, nav_beacon: false },
        hydraulicWearPercent: 0,
        hydraulicFailed: false,
        batteryWearPercent: 0,
        batteryWeak: false,
        airframeHours: 0,
        hoursSince100hrCheck: 0,
        hundredHourCheckCount: 0
      },
      invoiceCounter: 0,
      totalSpent: 0,
      invoices: []
    };
  }
  __name(createLogbook, "createLogbook");
  function createSessionTrackers(profile) {
    const takeoffPowerSeconds = {};
    const engineRunSeconds = {};
    const prevCombustionOn = {};
    for (const idx of profile.engineIndices) {
      takeoffPowerSeconds[idx] = 0;
      engineRunSeconds[idx] = 0;
      prevCombustionOn[idx] = null;
    }
    return {
      takeoffPowerSeconds,
      engineRunSeconds,
      prevCombustionOn,
      prevOnGround: null,
      prevFlapsPercent: null,
      prevGearPercent: null,
      flightStartApplied: false
    };
  }
  __name(createSessionTrackers, "createSessionTrackers");
  function sample(profile, state, trackers, input, log) {
    var _a;
    const dtHr = input.dtSec / 3600;
    const af = state.airframe;
    const combustionOnBeforeThisSample = {};
    for (const idx of profile.engineIndices) {
      combustionOnBeforeThisSample[idx] = (_a = trackers.prevCombustionOn[idx]) != null ? _a : null;
    }
    let anyEngineRunning = false;
    let anyGenerating = false;
    profile.engineIndices.forEach((idx, i) => {
      var _a2, _b, _c, _d, _e;
      const rec = state.engines[idx];
      const t = input.engines[idx];
      if (!rec || !t) return;
      const running = t.combustionOn;
      if (running) {
        trackers.engineRunSeconds[idx] = ((_a2 = trackers.engineRunSeconds[idx]) != null ? _a2 : 0) + input.dtSec;
      } else {
        trackers.engineRunSeconds[idx] = 0;
      }
      anyEngineRunning = anyEngineRunning || running;
      if (running && input.airframe.generatorOn[i]) anyGenerating = true;
      if (!running) {
        trackers.takeoffPowerSeconds[idx] = 0;
        trackers.prevCombustionOn[idx] = running;
        return;
      }
      rec.totalHours += dtHr;
      const oilPressValid = t.oilPressPsi > 0 && t.oilPressPsi < 500;
      const mapValid = t.manifoldPressInHg > 0 && t.manifoldPressInHg < 100;
      const reasons = [];
      let exceeded = false;
      let severe = false;
      if (t.oilTempC > profile.redlines.oilTempC) {
        exceeded = true;
        severe = severe || t.oilTempC > profile.redlines.oilTempTransientC;
        reasons.push(`oilT ${t.oilTempC.toFixed(0)}C>${profile.redlines.oilTempC.toFixed(0)}`);
      }
      if (t.chtC > profile.redlines.chtC) {
        exceeded = true;
        severe = severe || t.chtC > profile.redlines.chtC * 1.15;
        reasons.push(`CHT ${t.chtC.toFixed(0)}C>${profile.redlines.chtC.toFixed(0)}`);
      }
      const pastStartupGrace = ((_b = trackers.engineRunSeconds[idx]) != null ? _b : 0) >= profile.oilPressureStartupGraceSec;
      const pastIdleRpm = t.rpm >= profile.oilPressureMinRpmToCheck;
      if (oilPressValid && pastStartupGrace && pastIdleRpm && t.oilPressPsi < profile.redlines.oilPressLowPsi) {
        exceeded = true;
        severe = severe || t.oilPressPsi < profile.redlines.oilPressLowPsi * 0.7;
        reasons.push(`oilP ${t.oilPressPsi.toFixed(0)}psi<${profile.redlines.oilPressLowPsi.toFixed(0)}`);
      }
      if (oilPressValid && t.oilPressPsi > profile.redlines.oilPressHighPsi) {
        exceeded = true;
        reasons.push(`oilP ${t.oilPressPsi.toFixed(0)}psi>${profile.redlines.oilPressHighPsi.toFixed(0)}`);
      }
      const atOrNearRedlinePower = mapValid && t.manifoldPressInHg >= profile.redlines.manifoldPressInHg * 0.98 && t.rpm >= profile.redlines.rpm * 0.98;
      if (atOrNearRedlinePower) {
        trackers.takeoffPowerSeconds[idx] = ((_c = trackers.takeoffPowerSeconds[idx]) != null ? _c : 0) + input.dtSec;
      } else {
        trackers.takeoffPowerSeconds[idx] = 0;
      }
      const takeoffGraceExceededSec = profile.takeoffPowerTimeLimitMin * 60;
      const trueOverboost = mapValid && t.manifoldPressInHg > profile.redlines.manifoldPressInHg * 1.02;
      if (trueOverboost) {
        exceeded = true;
        severe = true;
        reasons.push(`MAP ${t.manifoldPressInHg.toFixed(1)}inHg>${(profile.redlines.manifoldPressInHg * 1.02).toFixed(1)}`);
      } else if (atOrNearRedlinePower && ((_d = trackers.takeoffPowerSeconds[idx]) != null ? _d : 0) > takeoffGraceExceededSec) {
        exceeded = true;
        reasons.push(`sustained takeoff power >${profile.takeoffPowerTimeLimitMin}min`);
      }
      if (exceeded) {
        rec.exceedanceCount += 1;
        const oilCritical = rec.oilQuantityPercent <= profile.oilCriticalPercent;
        const overdueTbo = rec.totalHours >= profile.engineTboHours;
        const overdue100hr = af.hoursSince100hrCheck >= profile.hundredHourCheckIntervalHours + profile.hundredHourCheckGraceHours;
        let mult = 1;
        if (oilCritical) mult *= profile.oilCriticalWearMultiplier;
        if (overdueTbo) mult *= profile.engineOverdueWearMultiplier;
        if (overdue100hr) mult *= profile.hundredHourOverdueWearMultiplier;
        const wearAdd = (severe ? profile.wearPerHardExceedance : profile.wearPerExceedanceSample) * mult;
        rec.wearPercent = Math.min(100, rec.wearPercent + wearAdd);
        log(`Engine ${idx}: exceedance -- ${reasons.join(", ")} -- wear now ${rec.wearPercent.toFixed(1)}% (rpm=${t.rpm.toFixed(0)}, run=${((_e = trackers.engineRunSeconds[idx]) != null ? _e : 0).toFixed(0)}s)`);
      }
      {
        const oilCritical = rec.oilQuantityPercent <= profile.oilCriticalPercent;
        const overdueTbo = rec.totalHours >= profile.engineTboHours;
        let mult = 1;
        if (oilCritical) mult *= profile.oilCriticalWearMultiplier;
        if (overdueTbo) mult *= profile.engineOverdueWearMultiplier;
        rec.wearPercent = Math.min(100, rec.wearPercent + profile.wearPerRunningHour * dtHr * mult);
      }
      {
        let consumption = profile.oilConsumptionQtPerHour * dtHr;
        if (rec.wearPercent >= profile.oilLeakStartsAtWearPercent) {
          consumption += profile.oilLeakQtPerHourWhenDamaged * dtHr;
        }
        const qtCapacity = profile.oilCapacityQuarts;
        const pctDrop = consumption / qtCapacity * 100;
        rec.oilQuantityPercent = Math.max(0, rec.oilQuantityPercent - pctDrop);
      }
      {
        let fpExceeded = false;
        if (t.fuelPressPsi > 0) {
          if (t.fuelPressPsi < profile.fuelPressLowPsi || t.fuelPressPsi > profile.fuelPressHighPsi) {
            fpExceeded = true;
          }
        }
        rec.fuelPumpWearPercent = Math.min(
          100,
          rec.fuelPumpWearPercent + profile.fuelPumpWearPerRunningHour * dtHr + (fpExceeded ? profile.fuelPumpWearPerPressureExceedance : 0)
        );
      }
      trackers.prevCombustionOn[idx] = running;
    });
    if (anyEngineRunning) {
      af.airframeHours += dtHr;
      af.hoursSince100hrCheck += dtHr;
    }
    {
      const overspeed = input.airframe.flapsPercent > 0 && input.airframe.airspeedKias > profile.vfeKias;
      if (overspeed) {
        const severeOver = input.airframe.airspeedKias > profile.vfeKias + profile.flapOverspeedMarginSevereKias;
        af.flapWearPercent = Math.min(
          100,
          af.flapWearPercent + (severeOver ? profile.flapWearPerSevereOverspeed : profile.flapWearPerOverspeedSample) * dtHr
        );
      }
      if (trackers.prevFlapsPercent !== null) {
        const wasRetracted = trackers.prevFlapsPercent < 5;
        const nowExtended = input.airframe.flapsPercent >= 5;
        const wasExtended = trackers.prevFlapsPercent >= 5;
        const nowRetracted = input.airframe.flapsPercent < 5;
        if (wasRetracted && nowExtended || wasExtended && nowRetracted) {
          af.flapWearPercent = Math.min(100, af.flapWearPercent + profile.flapWearPerCycle);
          af.hydraulicWearPercent = Math.min(100, af.hydraulicWearPercent + profile.hydraulicWearPerFlapCycle);
        }
      }
      trackers.prevFlapsPercent = input.airframe.flapsPercent;
    }
    {
      const gearDown = input.airframe.gearPercent > 50;
      const overspeed = gearDown && input.airframe.airspeedKias > profile.vleKias;
      if (overspeed) {
        af.gearWearPercent = Math.min(100, af.gearWearPercent + profile.gearWearPerOverspeedSample * dtHr);
      }
      if (trackers.prevGearPercent !== null) {
        const wasUp = trackers.prevGearPercent < 50;
        const nowDown = input.airframe.gearPercent >= 50;
        const wasDown = trackers.prevGearPercent >= 50;
        const nowUp = input.airframe.gearPercent < 50;
        if (wasUp && nowDown || wasDown && nowUp) {
          af.gearWearPercent = Math.min(100, af.gearWearPercent + profile.gearWearPerCycle);
          af.hydraulicWearPercent = Math.min(100, af.hydraulicWearPercent + profile.hydraulicWearPerGearCycle);
        }
      }
      trackers.prevGearPercent = input.airframe.gearPercent;
      if (trackers.prevOnGround === false && input.airframe.onGround) {
        const vs = Math.abs(input.airframe.verticalSpeedFpm);
        af.lastLandingVsFpm = vs;
        const overweight = input.airframe.totalWeightLb > profile.maxLandingWeightLb;
        const overweightMult = overweight ? profile.gearWearOverweightMultiplier : 1;
        let landingWear = 0;
        let tireBonus = 0;
        let severity = "";
        if (vs >= profile.landingVsSevereFpm) {
          landingWear = profile.gearWearPerSevereLanding;
          tireBonus = profile.tireWearPerHardLandingBonus;
          severity = "severe";
        } else if (vs >= profile.landingVsHardFpm) {
          landingWear = profile.gearWearPerHardLanding;
          tireBonus = profile.tireWearPerHardLandingBonus;
          severity = "hard";
        } else if (vs >= profile.landingVsFirmFpm) {
          landingWear = profile.gearWearPerFirmLanding;
          severity = "firm";
        }
        if (severity) {
          af.hardLandingCount += 1;
          af.gearWearPercent = Math.min(100, af.gearWearPercent + landingWear * overweightMult);
          log(`Landing gear: ${severity} landing (${vs.toFixed(0)} ft/min)${overweight ? " -- OVERWEIGHT" : ""}`);
        }
        af.tireCycleCount += 1;
        af.tireWearPercent = Math.min(100, af.tireWearPercent + profile.tireWearPerCycle + tireBonus);
      }
      if (trackers.prevOnGround === true && !input.airframe.onGround) {
        af.tireCycleCount += 1;
        af.tireWearPercent = Math.min(100, af.tireWearPercent + profile.tireWearPerCycle);
      }
      trackers.prevOnGround = input.airframe.onGround;
    }
    {
      const braking = Math.max(input.airframe.brakeLeftPercent, input.airframe.brakeRightPercent);
      if (input.airframe.onGround && input.airframe.groundSpeedKt >= profile.brakeUseGroundSpeedMinKt && braking > 5) {
        const hard = input.airframe.groundSpeedKt >= profile.brakeHardBrakingSpeedKt && braking >= profile.brakeHardBrakingApplicationPct;
        if (hard) af.brakeHardUseCount += 1;
        af.brakeWearPercent = Math.min(
          100,
          af.brakeWearPercent + (hard ? profile.brakeWearPerHardBrakeSample : profile.brakeWearPerUseSample)
        );
      }
    }
    {
      const circuits = [
        { key: "landing_taxi", on: input.airframe.landingLightOn || input.airframe.taxiLightOn },
        { key: "nav_beacon", on: input.airframe.navLightOn || input.airframe.beaconLightOn }
      ];
      for (const c of circuits) {
        if (af.lightBurnedOut[c.key]) continue;
        if (c.on) {
          af.lightHours[c.key] += dtHr;
          const lifeHours = profile.lightLifeHours[c.key];
          if (af.lightHours[c.key] > lifeHours) {
            const pastLifeHr = af.lightHours[c.key] - lifeHours;
            const chance = 1 - Math.pow(1 - profile.lightBurnoutChancePerHourPastLife, dtHr);
            if (Math.random() < chance && pastLifeHr > 0) {
              af.lightBurnedOut[c.key] = true;
              log(`${c.key === "landing_taxi" ? "Landing/Taxi" : "Nav/Beacon"} light burned out (${af.lightHours[c.key].toFixed(0)}h).`);
            }
          }
        }
      }
    }
    {
      profile.engineIndices.forEach((idx) => {
        const t = input.engines[idx];
        const prev = combustionOnBeforeThisSample[idx];
        if (t && prev === false && t.combustionOn) {
          af.batteryWearPercent = Math.min(100, af.batteryWearPercent + profile.batteryWearPerEngineStart);
        }
      });
      if (anyEngineRunning) {
        af.batteryWearPercent = Math.min(100, af.batteryWearPercent + profile.batteryWearPerRunningHour * dtHr);
      }
      if (anyGenerating) {
        af.batteryWearPercent = Math.max(0, af.batteryWearPercent - profile.batteryRechargePerHour * dtHr);
      }
    }
  }
  __name(sample, "sample");
  function applyStartConsequences(profile, state) {
    const logs = [];
    const engineFailures = {};
    const fuelPumpFailures = {};
    for (const idx of profile.engineIndices) {
      const rec = state.engines[idx];
      if (!rec) continue;
      if (rec.wearPercent >= profile.wearWarnThreshold) {
        logs.push(`Engine ${idx}: wear at ${rec.wearPercent.toFixed(0)}% -- monitor closely.`);
      }
      if (rec.wearPercent >= profile.wearFailureRiskThreshold) {
        const chance = profile.failureChanceAtMaxWear * ((rec.wearPercent - profile.wearFailureRiskThreshold) / (100 - profile.wearFailureRiskThreshold));
        if (Math.random() < chance) {
          engineFailures[idx] = true;
          rec.failureCount += 1;
          rec.failed = true;
          rec.lastFailureReason = "high wear at startup";
          logs.push(`Engine ${idx}: FAILED TO START -- wear-related failure (${rec.wearPercent.toFixed(0)}% wear).`);
        }
      }
      if (rec.fuelPumpWearPercent >= profile.fuelPumpFailureRiskThreshold) {
        const chance = profile.fuelPumpFailureChanceAtMaxWear * ((rec.fuelPumpWearPercent - profile.fuelPumpFailureRiskThreshold) / (100 - profile.fuelPumpFailureRiskThreshold));
        if (Math.random() < chance) {
          fuelPumpFailures[idx] = true;
          logs.push(`Engine ${idx}: fuel pump failed to engage (${rec.fuelPumpWearPercent.toFixed(0)}% wear).`);
        }
      }
      if (rec.oilQuantityPercent <= profile.oilLowWarningPercent) {
        logs.push(`Engine ${idx}: oil at ${rec.oilQuantityPercent.toFixed(0)}% -- consider refilling.`);
      }
    }
    let flapJam = false;
    if (state.airframe.flapWearPercent >= profile.flapJamRiskThreshold) {
      const chance = profile.flapJamChanceAtMaxWear * ((state.airframe.flapWearPercent - profile.flapJamRiskThreshold) / (100 - profile.flapJamRiskThreshold));
      if (Math.random() < chance) {
        flapJam = true;
        state.airframe.flapJammed = true;
        logs.push(`Flaps: JAMMED at current position (${state.airframe.flapWearPercent.toFixed(0)}% wear).`);
      }
    }
    let gearJam = false;
    if (state.airframe.gearWearPercent >= profile.gearJamRiskThreshold) {
      const chance = profile.gearJamChanceAtMaxWear * ((state.airframe.gearWearPercent - profile.gearJamRiskThreshold) / (100 - profile.gearJamRiskThreshold));
      if (Math.random() < chance) {
        gearJam = true;
        state.airframe.gearJammed = true;
        logs.push(`Landing gear: JAMMED at current position (${state.airframe.gearWearPercent.toFixed(0)}% wear).`);
      }
    }
    if (state.airframe.hydraulicWearPercent >= profile.hydraulicFailureRiskThreshold) {
      const chance = profile.hydraulicFailureChanceAtMaxWear * ((state.airframe.hydraulicWearPercent - profile.hydraulicFailureRiskThreshold) / (100 - profile.hydraulicFailureRiskThreshold));
      if (Math.random() < chance) {
        state.airframe.hydraulicFailed = true;
        state.airframe.flapJammed = true;
        state.airframe.gearJammed = true;
        logs.push(`Hydraulic system: FAILED -- flaps and gear both jammed (${state.airframe.hydraulicWearPercent.toFixed(0)}% wear).`);
      }
    }
    if (state.airframe.tireWearPercent >= profile.tireBlowoutRiskThreshold) {
      const chance = profile.tireBlowoutChanceAtMaxWear * ((state.airframe.tireWearPercent - profile.tireBlowoutRiskThreshold) / (100 - profile.tireBlowoutRiskThreshold));
      if (Math.random() < chance) {
        state.airframe.tireBlown = true;
        logs.push(`Tires: BLOWN (${state.airframe.tireWearPercent.toFixed(0)}% wear, warning-only).`);
      }
    }
    if (state.airframe.batteryWearPercent >= profile.batteryWeakRiskThreshold) {
      const chance = profile.batteryWeakChanceAtMaxWear * ((state.airframe.batteryWearPercent - profile.batteryWeakRiskThreshold) / (100 - profile.batteryWeakRiskThreshold));
      if (Math.random() < chance) {
        state.airframe.batteryWeak = true;
        logs.push(`Battery: WEAK (${state.airframe.batteryWearPercent.toFixed(0)}% wear, warning-only).`);
      }
    }
    if (state.airframe.airframeHours >= profile.airframeOverhaulHours * 0.9) {
      const overdue = state.airframe.airframeHours >= profile.airframeOverhaulHours;
      logs.push(`Airframe: ${overdue ? "OVERDUE" : "approaching"} structural overhaul -- ${state.airframe.airframeHours.toFixed(0)} of ${profile.airframeOverhaulHours.toFixed(0)} hours.`);
    }
    const hrs = state.airframe.hoursSince100hrCheck;
    if (hrs >= profile.hundredHourCheckIntervalHours + profile.hundredHourCheckGraceHours) {
      logs.push(`100-hour check: OVERDUE past the ${profile.hundredHourCheckGraceHours.toFixed(0)}-hour grace period -- ${hrs.toFixed(1)} of ${profile.hundredHourCheckIntervalHours.toFixed(0)} hours (FAR 91.409(b)).`);
    } else if (hrs >= profile.hundredHourCheckIntervalHours) {
      logs.push(`100-hour check: DUE -- ${hrs.toFixed(1)} of ${profile.hundredHourCheckIntervalHours.toFixed(0)} hours.`);
    }
    return { engineFailures, fuelPumpFailures, flapJam, gearJam, logs };
  }
  __name(applyStartConsequences, "applyStartConsequences");
  function issueInvoice(state, lineItems) {
    state.invoiceCounter += 1;
    const total = lineItems.reduce((sum, li) => sum + li.cost, 0);
    const prefix = state.tailNumber.replace(/[^A-Za-z0-9]/g, "") || "INV";
    const invoice = {
      number: `${prefix}-${String(state.invoiceCounter).padStart(5, "0")}`,
      ts: (/* @__PURE__ */ new Date()).toISOString(),
      lineItems: lineItems.map((li) => ({ description: li.description, cost: Math.round(li.cost * 100) / 100 })),
      total: Math.round(total * 100) / 100
    };
    state.totalSpent += total;
    state.invoices.push(invoice);
    if (state.invoices.length > 200) state.invoices = state.invoices.slice(-200);
    return invoice;
  }
  __name(issueInvoice, "issueInvoice");
  function repairEngine(profile, state, idx) {
    const rec = state.engines[idx];
    const wearBefore = rec.wearPercent;
    rec.wearPercent = 0;
    rec.lastFailureReason = null;
    const cost = computeRepairCost(profile, "engine_repair", wearBefore / 100);
    return issueInvoice(state, [{ description: `Engine ${idx} Repair (${wearBefore.toFixed(0)}% wear)`, cost }]);
  }
  __name(repairEngine, "repairEngine");
  function overhaulEngine(profile, state, idx) {
    const rec = state.engines[idx];
    rec.wearPercent = 0;
    rec.totalHours = 0;
    rec.lastFailureReason = null;
    const cost = computeRepairCost(profile, "engine_overhaul");
    return issueInvoice(state, [{ description: `Engine ${idx} Overhaul (full)`, cost }]);
  }
  __name(overhaulEngine, "overhaulEngine");
  function refillOil(profile, state, idx) {
    const rec = state.engines[idx];
    const needed = Math.max(0, 100 - rec.oilQuantityPercent);
    if (needed <= 0.05) return null;
    const qtNeeded = needed / 100 * profile.oilCapacityQuarts;
    rec.oilQuantityPercent = 100;
    const cost = qtNeeded * profile.oilCostPerQuart;
    return issueInvoice(state, [{ description: `Engine ${idx} Oil Top-Off (${qtNeeded.toFixed(1)} qt @ ${profile.currencySymbol}${profile.oilCostPerQuart.toFixed(2)}/qt)`, cost }]);
  }
  __name(refillOil, "refillOil");
  function repairFuelPump(profile, state, idx) {
    const rec = state.engines[idx];
    const wearBefore = rec.fuelPumpWearPercent;
    rec.fuelPumpWearPercent = 0;
    const cost = computeRepairCost(profile, "fuel_pump_service", wearBefore / 100);
    return issueInvoice(state, [{ description: `Engine ${idx} Fuel Pump Service (${wearBefore.toFixed(0)}% wear)`, cost }]);
  }
  __name(repairFuelPump, "repairFuelPump");
  function repairFlaps(profile, state) {
    const wearBefore = state.airframe.flapWearPercent;
    state.airframe.flapWearPercent = 0;
    state.airframe.flapJammed = false;
    const cost = computeRepairCost(profile, "flap_repair", wearBefore / 100);
    return issueInvoice(state, [{ description: `Flap System Repair (${wearBefore.toFixed(0)}% wear)`, cost }]);
  }
  __name(repairFlaps, "repairFlaps");
  function repairGear(profile, state) {
    const wearBefore = state.airframe.gearWearPercent;
    state.airframe.gearWearPercent = 0;
    state.airframe.gearJammed = false;
    const cost = computeRepairCost(profile, "gear_repair", wearBefore / 100);
    return issueInvoice(state, [{ description: `Landing Gear Repair (${wearBefore.toFixed(0)}% wear)`, cost }]);
  }
  __name(repairGear, "repairGear");
  function repairBrakes(profile, state) {
    const wearBefore = state.airframe.brakeWearPercent;
    state.airframe.brakeWearPercent = 0;
    state.airframe.brakeFaded = false;
    const cost = computeRepairCost(profile, "brake_repair", wearBefore / 100);
    return issueInvoice(state, [{ description: `Brake System Repair (${wearBefore.toFixed(0)}% wear)`, cost }]);
  }
  __name(repairBrakes, "repairBrakes");
  function repairTires(profile, state) {
    const wearBefore = state.airframe.tireWearPercent;
    state.airframe.tireWearPercent = 0;
    state.airframe.tireBlown = false;
    const cost = computeRepairCost(profile, "tire_replacement", wearBefore / 100);
    return issueInvoice(state, [{ description: `Tire Replacement (set) (${wearBefore.toFixed(0)}% wear)`, cost }]);
  }
  __name(repairTires, "repairTires");
  function repairLight(profile, state, circuit) {
    const lifeHours = profile.lightLifeHours[circuit];
    const frac = lifeHours > 0 ? state.airframe.lightHours[circuit] / lifeHours : 0;
    state.airframe.lightHours[circuit] = 0;
    state.airframe.lightBurnedOut[circuit] = false;
    const label = circuit === "landing_taxi" ? "Landing/Taxi" : "Nav/Beacon";
    const cost = computeRepairCost(profile, `light_repair_${circuit}`, frac);
    return issueInvoice(state, [{ description: `${label} Bulb Replacement`, cost }]);
  }
  __name(repairLight, "repairLight");
  function repairHydraulics(profile, state) {
    const wearBefore = state.airframe.hydraulicWearPercent;
    const wasFailed = state.airframe.hydraulicFailed;
    state.airframe.hydraulicWearPercent = 0;
    state.airframe.hydraulicFailed = false;
    if (wasFailed) {
      state.airframe.flapJammed = false;
      state.airframe.gearJammed = false;
    }
    const cost = computeRepairCost(profile, "hydraulic_service", wearBefore / 100);
    return issueInvoice(state, [{ description: `Hydraulic System Service (${wearBefore.toFixed(0)}% wear)`, cost }]);
  }
  __name(repairHydraulics, "repairHydraulics");
  function repairBattery(profile, state) {
    const wearBefore = state.airframe.batteryWearPercent;
    state.airframe.batteryWearPercent = 0;
    state.airframe.batteryWeak = false;
    const cost = computeRepairCost(profile, "battery_replacement", wearBefore / 100);
    return issueInvoice(state, [{ description: `Battery Replacement (${wearBefore.toFixed(0)}% wear)`, cost }]);
  }
  __name(repairBattery, "repairBattery");
  function performHundredHourCheck(profile, state) {
    const hoursBefore = state.airframe.hoursSince100hrCheck;
    const interval = profile.hundredHourCheckIntervalHours;
    const overage = Math.max(0, hoursBefore - interval);
    state.airframe.hoursSince100hrCheck = overage;
    state.airframe.hundredHourCheckCount += 1;
    const cost = computeRepairCost(profile, "hundred_hour_check");
    return issueInvoice(state, [{ description: `100-Hour Inspection (FAR 91.409) (at ${hoursBefore.toFixed(1)}h)`, cost }]);
  }
  __name(performHundredHourCheck, "performHundredHourCheck");
  function overhaulAirframe(profile, state) {
    state.airframe.airframeHours = 0;
    const cost = computeRepairCost(profile, "airframe_overhaul");
    return issueInvoice(state, [{ description: "Airframe Structural Overhaul (full)", cost }]);
  }
  __name(overhaulAirframe, "overhaulAirframe");

  // src/simvars.ts
  function combustionOn(idx) {
    return SimVar.GetSimVarValue(`GENERAL ENG COMBUSTION:${idx}`, "bool") !== 0;
  }
  __name(combustionOn, "combustionOn");
  function oilTempC(idx) {
    return SimVar.GetSimVarValue(`GENERAL ENG OIL TEMPERATURE:${idx}`, "celsius");
  }
  __name(oilTempC, "oilTempC");
  function chtC(idx) {
    return SimVar.GetSimVarValue(`RECIP ENG CYLINDER HEAD TEMPERATURE:${idx}`, "celsius");
  }
  __name(chtC, "chtC");
  function oilPressPsi(idx) {
    return SimVar.GetSimVarValue(`GENERAL ENG OIL PRESSURE:${idx}`, "psi");
  }
  __name(oilPressPsi, "oilPressPsi");
  function manifoldPressInHg(idx) {
    return SimVar.GetSimVarValue(`RECIP ENG MANIFOLD PRESSURE:${idx}`, "inHg");
  }
  __name(manifoldPressInHg, "manifoldPressInHg");
  function rpm(idx) {
    return SimVar.GetSimVarValue(`GENERAL ENG RPM:${idx}`, "rpm");
  }
  __name(rpm, "rpm");
  function fuelPressPsi(idx) {
    return SimVar.GetSimVarValue(`GENERAL ENG FUEL PRESSURE:${idx}`, "psi");
  }
  __name(fuelPressPsi, "fuelPressPsi");
  function elapsedTimeHr(idx) {
    return SimVar.GetSimVarValue(`GENERAL ENG ELAPSED TIME:${idx}`, "hours");
  }
  __name(elapsedTimeHr, "elapsedTimeHr");
  function generatorOn(idx) {
    return SimVar.GetSimVarValue(`GENERAL ENG GENERATOR SWITCH:${idx}`, "bool") !== 0;
  }
  __name(generatorOn, "generatorOn");
  function aircraftTitle() {
    return SimVar.GetSimVarValue("ATC MODEL", "string") || SimVar.GetSimVarValue("TITLE", "string") || "";
  }
  __name(aircraftTitle, "aircraftTitle");
  function tailNumber() {
    return SimVar.GetSimVarValue("ATC ID", "string") || "UNKNOWN";
  }
  __name(tailNumber, "tailNumber");
  function airspeedKias() {
    return SimVar.GetSimVarValue("AIRSPEED INDICATED", "knots");
  }
  __name(airspeedKias, "airspeedKias");
  function groundSpeedKt() {
    return SimVar.GetSimVarValue("GROUND VELOCITY", "knots");
  }
  __name(groundSpeedKt, "groundSpeedKt");
  function flapsPercent() {
    return SimVar.GetSimVarValue("TRAILING EDGE FLAPS LEFT PERCENT", "percent");
  }
  __name(flapsPercent, "flapsPercent");
  function gearPercentCenter() {
    return SimVar.GetSimVarValue("GEAR CENTER POSITION", "percent");
  }
  __name(gearPercentCenter, "gearPercentCenter");
  function gearPercentLeft() {
    return SimVar.GetSimVarValue("GEAR LEFT POSITION", "percent");
  }
  __name(gearPercentLeft, "gearPercentLeft");
  function onGround() {
    return SimVar.GetSimVarValue("SIM ON GROUND", "bool") !== 0;
  }
  __name(onGround, "onGround");
  function verticalSpeedFpm() {
    return SimVar.GetSimVarValue("VERTICAL SPEED", "feet per minute");
  }
  __name(verticalSpeedFpm, "verticalSpeedFpm");
  function totalWeightLb() {
    return SimVar.GetSimVarValue("TOTAL WEIGHT", "pounds");
  }
  __name(totalWeightLb, "totalWeightLb");
  function brakeLeftPercent() {
    const raw = SimVar.GetSimVarValue("BRAKE LEFT POSITION", "position");
    return Math.max(0, Math.min(100, raw / 16384 * 100));
  }
  __name(brakeLeftPercent, "brakeLeftPercent");
  function brakeRightPercent() {
    const raw = SimVar.GetSimVarValue("BRAKE RIGHT POSITION", "position");
    return Math.max(0, Math.min(100, raw / 16384 * 100));
  }
  __name(brakeRightPercent, "brakeRightPercent");
  function landingLightOn() {
    return SimVar.GetSimVarValue("LIGHT LANDING", "bool") !== 0;
  }
  __name(landingLightOn, "landingLightOn");
  function taxiLightOn() {
    return SimVar.GetSimVarValue("LIGHT TAXI", "bool") !== 0;
  }
  __name(taxiLightOn, "taxiLightOn");
  function navLightOn() {
    return SimVar.GetSimVarValue("LIGHT NAV", "bool") !== 0;
  }
  __name(navLightOn, "navLightOn");
  function beaconLightOn() {
    return SimVar.GetSimVarValue("LIGHT BEACON", "bool") !== 0;
  }
  __name(beaconLightOn, "beaconLightOn");
  function setFailed(idx, failed) {
    return SimVar.SetSimVarValue(`GENERAL ENG FAILED:${idx}`, "bool", failed ? 1 : 0);
  }
  __name(setFailed, "setFailed");
  function setFuelPumpOn(idx, on) {
    return SimVar.SetSimVarValue(`GENERAL ENG FUEL PUMP ON:${idx}`, "bool", on ? 1 : 0);
  }
  __name(setFuelPumpOn, "setFuelPumpOn");
  function holdGearPosition(percent, hasCenterGear) {
    const writes = [
      SimVar.SetSimVarValue("GEAR LEFT POSITION", "percent", percent),
      SimVar.SetSimVarValue("GEAR RIGHT POSITION", "percent", percent)
    ];
    if (hasCenterGear) writes.push(SimVar.SetSimVarValue("GEAR CENTER POSITION", "percent", percent));
    return writes;
  }
  __name(holdGearPosition, "holdGearPosition");
  function holdFlapPosition(percent) {
    return SimVar.SetSimVarValue("TRAILING EDGE FLAPS LEFT PERCENT", "percent", percent);
  }
  __name(holdFlapPosition, "holdFlapPosition");
  function capBrakePosition(capPercent, current) {
    if (current <= capPercent) return null;
    const rawCap = capPercent / 100 * 16384;
    return SimVar.SetSimVarValue("BRAKE LEFT POSITION", "position", rawCap);
  }
  __name(capBrakePosition, "capBrakePosition");

  // src/TemplateApp.tsx
  var POLL_MS = 2e3;
  var STORAGE_PREFIX = "engineLogbook";
  function storageKey(aircraftId, tail) {
    const safeTail = tail.replace(/[^A-Za-z0-9]/g, "") || "UNKNOWN";
    return `${STORAGE_PREFIX}:${aircraftId}:${safeTail}`;
  }
  __name(storageKey, "storageKey");
  function loadLogbook(profile, tail, title) {
    try {
      const raw = localStorage.getItem(storageKey(profile.id, tail));
      if (raw) {
        const parsed = JSON.parse(raw);
        const fresh = createLogbook(profile, tail, title);
        return __spreadProps(__spreadValues(__spreadValues({}, fresh), parsed), { airframe: __spreadValues(__spreadValues({}, fresh.airframe), parsed.airframe) });
      }
    } catch (e) {
      console.error("Failed to load logbook, starting fresh:", e);
    }
    return createLogbook(profile, tail, title);
  }
  __name(loadLogbook, "loadLogbook");
  function saveLogbook(state) {
    try {
      localStorage.setItem(storageKey(state.aircraftId, state.tailNumber), JSON.stringify(state));
    } catch (e) {
      console.error("Failed to save logbook:", e);
    }
  }
  __name(saveLogbook, "saveLogbook");
  function costRange(profile, key) {
    const entry = profile.repairCosts[key];
    if (typeof entry === "number") return `${profile.currencySymbol}${entry.toLocaleString()}`;
    return `${profile.currencySymbol}${entry.min.toLocaleString()}-${profile.currencySymbol}${entry.max.toLocaleString()}`;
  }
  __name(costRange, "costRange");
  function costAt(profile, key, wearFraction) {
    const entry = profile.repairCosts[key];
    if (typeof entry === "number") return `${profile.currencySymbol}${entry.toLocaleString()}`;
    const cost = entry.min + (entry.max - entry.min) * Math.max(0, Math.min(1, wearFraction));
    return `${profile.currencySymbol}${Math.round(cost).toLocaleString()}`;
  }
  __name(costAt, "costAt");
  var _EngineCard = class _EngineCard extends import_msfs_sdk.DisplayComponent {
    constructor() {
      super(...arguments);
      this.wearLabel = import_msfs_sdk.FSComponent.createRef();
      this.wearBar = import_msfs_sdk.FSComponent.createRef();
      this.oilLabel = import_msfs_sdk.FSComponent.createRef();
      this.oilBar = import_msfs_sdk.FSComponent.createRef();
      this.pumpLabel = import_msfs_sdk.FSComponent.createRef();
      this.muted = import_msfs_sdk.FSComponent.createRef();
      this.repairBtn = import_msfs_sdk.FSComponent.createRef();
      this.pumpBtn = import_msfs_sdk.FSComponent.createRef();
    }
    update(rec) {
      const p = this.props.profile;
      this.wearLabel.instance.textContent = `Wear: ${rec.wearPercent.toFixed(1)}%`;
      this.wearBar.instance.style.width = `${rec.wearPercent}%`;
      this.oilLabel.instance.textContent = `Oil: ${rec.oilQuantityPercent.toFixed(0)}%`;
      this.oilBar.instance.style.width = `${rec.oilQuantityPercent}%`;
      this.pumpLabel.instance.textContent = `Fuel pump wear: ${rec.fuelPumpWearPercent.toFixed(1)}%`;
      const tboOverdue = rec.totalHours >= p.engineTboHours;
      this.muted.instance.textContent = `Hours toward TBO: ${rec.totalHours.toFixed(0)} / ${p.engineTboHours.toFixed(0)}` + (tboOverdue ? " \u26A0 OVERDUE" : "") + ` | Exceedances: ${rec.exceedanceCount} | Failures: ${rec.failureCount}`;
      this.repairBtn.instance.textContent = `Repair Engine (${costAt(p, "engine_repair", rec.wearPercent / 100)})`;
      this.pumpBtn.instance.textContent = `Service Fuel Pump (${costAt(p, "fuel_pump_service", rec.fuelPumpWearPercent / 100)})`;
    }
    render() {
      const p = this.props.profile;
      return /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("div", { class: "engine-card" }, /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("div", { class: "engine-card__title" }, "Engine ", this.props.idx), /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("div", { class: "engine-card__row", ref: this.wearLabel }, "Wear: --%"), /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("div", { class: "engine-card__bar" }, /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("div", { class: "engine-card__bar-fill", ref: this.wearBar })), /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("div", { class: "engine-card__row", ref: this.oilLabel }, "Oil: --%"), /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("div", { class: "engine-card__bar" }, /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("div", { class: "engine-card__bar-fill", ref: this.oilBar })), /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("div", { class: "engine-card__row", ref: this.pumpLabel }, "Fuel pump wear: --%"), /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("div", { class: "engine-card__muted", ref: this.muted }, "--"), /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("div", { class: "engine-card__buttons" }, /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("button", { ref: this.repairBtn, onClick: () => this.props.onRepair() }, "Repair Engine (", costRange(p, "engine_repair"), ")"), /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("button", { onClick: () => this.props.onRefillOil() }, "Refill Oil"), /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("button", { ref: this.pumpBtn, onClick: () => this.props.onRepairPump() }, "Service Fuel Pump (", costRange(p, "fuel_pump_service"), ")"), /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("button", { onClick: () => this.props.onOverhaul() }, "Overhaul Engine (", costRange(p, "engine_overhaul"), ")")));
    }
  };
  __name(_EngineCard, "EngineCard");
  var EngineCard = _EngineCard;
  var _AirframeCard = class _AirframeCard extends import_msfs_sdk.DisplayComponent {
    constructor() {
      super(...arguments);
      this.flapLabel = import_msfs_sdk.FSComponent.createRef();
      this.gearLabel = import_msfs_sdk.FSComponent.createRef();
      this.brakeLabel = import_msfs_sdk.FSComponent.createRef();
      this.muted = import_msfs_sdk.FSComponent.createRef();
      this.flapBtn = import_msfs_sdk.FSComponent.createRef();
      this.gearBtn = import_msfs_sdk.FSComponent.createRef();
      this.brakeBtn = import_msfs_sdk.FSComponent.createRef();
    }
    update(af) {
      const p = this.props.profile;
      this.flapLabel.instance.textContent = `Flap wear: ${af.flapWearPercent.toFixed(1)}%${af.flapJammed ? " \u26A0 JAMMED" : ""}`;
      this.gearLabel.instance.textContent = `Gear wear: ${af.gearWearPercent.toFixed(1)}%${af.gearJammed ? " \u26A0 JAMMED" : ""}`;
      this.brakeLabel.instance.textContent = `Brake wear: ${af.brakeWearPercent.toFixed(1)}%${af.brakeFaded ? " \u26A0 FADED" : ""}`;
      this.muted.instance.textContent = `Vfe ${p.vfeKias} / Vle ${p.vleKias} kt | Hard landings: ${af.hardLandingCount} | Hard braking: ${af.brakeHardUseCount}`;
      this.flapBtn.instance.textContent = `Repair Flaps (${costAt(p, "flap_repair", af.flapWearPercent / 100)})`;
      this.gearBtn.instance.textContent = `Repair Gear (${costAt(p, "gear_repair", af.gearWearPercent / 100)})`;
      this.brakeBtn.instance.textContent = `Repair Brakes (${costAt(p, "brake_repair", af.brakeWearPercent / 100)})`;
    }
    render() {
      return /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("div", { class: "airframe-card" }, /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("div", { class: "airframe-card__title" }, "Flaps, Gear & Brakes"), /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("div", { ref: this.flapLabel }, "Flap wear: --%"), /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("div", { ref: this.gearLabel }, "Gear wear: --%"), /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("div", { ref: this.brakeLabel }, "Brake wear: --%"), /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("div", { class: "airframe-card__muted", ref: this.muted }, "--"), /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("div", { class: "airframe-card__buttons" }, /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("button", { ref: this.flapBtn, onClick: () => this.props.onRepairFlaps() }, "Repair Flaps"), /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("button", { ref: this.gearBtn, onClick: () => this.props.onRepairGear() }, "Repair Gear"), /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("button", { ref: this.brakeBtn, onClick: () => this.props.onRepairBrakes() }, "Repair Brakes")));
    }
  };
  __name(_AirframeCard, "AirframeCard");
  var AirframeCard = _AirframeCard;
  var _SystemsCard = class _SystemsCard extends import_msfs_sdk.DisplayComponent {
    constructor() {
      super(...arguments);
      this.tireLabel = import_msfs_sdk.FSComponent.createRef();
      this.hydraulicLabel = import_msfs_sdk.FSComponent.createRef();
      this.batteryLabel = import_msfs_sdk.FSComponent.createRef();
      this.lightsLine = import_msfs_sdk.FSComponent.createRef();
      this.airframeLine = import_msfs_sdk.FSComponent.createRef();
      this.hundredHourLine = import_msfs_sdk.FSComponent.createRef();
      this.tireBtn = import_msfs_sdk.FSComponent.createRef();
      this.landingTaxiBtn = import_msfs_sdk.FSComponent.createRef();
      this.navBeaconBtn = import_msfs_sdk.FSComponent.createRef();
      this.hydraulicBtn = import_msfs_sdk.FSComponent.createRef();
      this.batteryBtn = import_msfs_sdk.FSComponent.createRef();
    }
    update(af) {
      const p = this.props.profile;
      this.tireLabel.instance.textContent = `Tire wear: ${af.tireWearPercent.toFixed(1)}%${af.tireBlown ? " \u26A0 BLOWN" : ""}`;
      this.hydraulicLabel.instance.textContent = `Hydraulic wear: ${af.hydraulicWearPercent.toFixed(1)}%${af.hydraulicFailed ? " \u26A0 FAILED" : ""}`;
      this.batteryLabel.instance.textContent = `Battery wear: ${af.batteryWearPercent.toFixed(1)}%${af.batteryWeak ? " \u26A0 WEAK" : ""}`;
      this.lightsLine.instance.textContent = `Landing/Taxi: ${af.lightHours.landing_taxi.toFixed(0)}h${af.lightBurnedOut.landing_taxi ? " \u26A0" : ""} | Nav/Beacon: ${af.lightHours.nav_beacon.toFixed(0)}h${af.lightBurnedOut.nav_beacon ? " \u26A0" : ""}`;
      this.airframeLine.instance.textContent = `Airframe hours: ${af.airframeHours.toFixed(0)} / ${p.airframeOverhaulHours.toFixed(0)}`;
      const hrs = af.hoursSince100hrCheck;
      const interval = p.hundredHourCheckIntervalHours;
      const grace = p.hundredHourCheckGraceHours;
      const status = hrs >= interval + grace ? " \u26A0 OVERDUE" : hrs >= interval ? ` \u26A0 DUE (${grace.toFixed(0)}h grace)` : "";
      this.hundredHourLine.instance.textContent = `100-hour check: ${hrs.toFixed(1)} / ${interval.toFixed(0)} hrs${status} (completed ${af.hundredHourCheckCount}x)`;
      this.tireBtn.instance.textContent = `Replace Tires (${costAt(p, "tire_replacement", af.tireWearPercent / 100)})`;
      this.landingTaxiBtn.instance.textContent = `Replace Landing/Taxi Bulb (${costAt(p, "light_repair_landing_taxi", af.lightHours.landing_taxi / p.lightLifeHours.landing_taxi)})`;
      this.navBeaconBtn.instance.textContent = `Replace Nav/Beacon Bulb (${costAt(p, "light_repair_nav_beacon", af.lightHours.nav_beacon / p.lightLifeHours.nav_beacon)})`;
      this.hydraulicBtn.instance.textContent = `Service Hydraulics (${costAt(p, "hydraulic_service", af.hydraulicWearPercent / 100)})`;
      this.batteryBtn.instance.textContent = `Replace Battery (${costAt(p, "battery_replacement", af.batteryWearPercent / 100)})`;
    }
    render() {
      const p = this.props.profile;
      return /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("div", { class: "systems-card" }, /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("div", { class: "systems-card__title" }, "Tires, Lights, Hydraulics & Battery"), /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("div", { ref: this.tireLabel }, "Tire wear: --%"), /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("div", { ref: this.hydraulicLabel }, "Hydraulic wear: --%"), /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("div", { ref: this.batteryLabel }, "Battery wear: --%"), /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("div", { class: "systems-card__muted", ref: this.lightsLine }, "--"), /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("div", { class: "systems-card__muted", ref: this.airframeLine }, "--"), /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("div", { class: "systems-card__muted", ref: this.hundredHourLine }, "--"), /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("div", { class: "systems-card__buttons" }, /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("button", { ref: this.tireBtn, onClick: () => this.props.onRepairTires() }, "Replace Tires"), /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("button", { ref: this.landingTaxiBtn, onClick: () => this.props.onRepairLight("landing_taxi") }, "Replace Landing/Taxi Bulb"), /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("button", { ref: this.navBeaconBtn, onClick: () => this.props.onRepairLight("nav_beacon") }, "Replace Nav/Beacon Bulb"), /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("button", { ref: this.hydraulicBtn, onClick: () => this.props.onRepairHydraulics() }, "Service Hydraulics"), /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("button", { ref: this.batteryBtn, onClick: () => this.props.onRepairBattery() }, "Replace Battery"), /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("button", { onClick: () => this.props.onHundredHourCheck() }, "100-Hour Check (", costRange(p, "hundred_hour_check"), ")"), /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("button", { onClick: () => this.props.onOverhaulAirframe() }, "Overhaul Airframe (", costRange(p, "airframe_overhaul"), ")")));
    }
  };
  __name(_SystemsCard, "SystemsCard");
  var SystemsCard = _SystemsCard;
  var _EngineLogbookApp = class _EngineLogbookApp extends import_msfs_sdk.DisplayComponent {
    constructor() {
      super(...arguments);
      this.root = import_msfs_sdk.FSComponent.createRef();
      this.titleEl = import_msfs_sdk.FSComponent.createRef();
      this.badgeEl = import_msfs_sdk.FSComponent.createRef();
      this.dropdown = import_msfs_sdk.FSComponent.createRef();
      this.subEl = import_msfs_sdk.FSComponent.createRef();
      this.enginesContainer = import_msfs_sdk.FSComponent.createRef();
      this.airframeCardRef = import_msfs_sdk.FSComponent.createRef();
      this.systemsCardRef = import_msfs_sdk.FSComponent.createRef();
      this.logBody = import_msfs_sdk.FSComponent.createRef();
      this.engineCards = [];
      this.profile = null;
      this.state = null;
      this.trackers = null;
      this.pollHandle = null;
    }
    onAfterRender(_node) {
      this.populateDropdown();
      const title = aircraftTitle();
      const detected = detectProfileFromTitle(title);
      if (detected) {
        this.selectProfile(detected, "auto");
      } else {
        this.badgeEl.instance.textContent = `Couldn't auto-detect ("${title}") -- pick one:`;
        this.badgeEl.instance.className = "engine-logbook__badge engine-logbook__badge--manual";
      }
      this.dropdown.instance.addEventListener("change", () => {
        const id = this.dropdown.instance.value;
        if (id && AIRCRAFT_PROFILES[id]) {
          this.selectProfile(AIRCRAFT_PROFILES[id], "manual");
        }
      });
    }
    populateDropdown() {
      const select = this.dropdown.instance;
      select.innerHTML = "";
      const placeholder = document.createElement("option");
      placeholder.value = "";
      placeholder.textContent = "Select aircraft...";
      placeholder.disabled = true;
      select.appendChild(placeholder);
      for (const id of AIRCRAFT_ORDER) {
        const opt = document.createElement("option");
        opt.value = id;
        opt.textContent = AIRCRAFT_PROFILES[id].displayName;
        select.appendChild(opt);
      }
    }
    selectProfile(profile, mode) {
      this.profile = profile;
      this.dropdown.instance.value = profile.id;
      this.badgeEl.instance.textContent = mode === "auto" ? "\u2713 auto-detected" : "manually selected";
      this.badgeEl.instance.className = `engine-logbook__badge engine-logbook__badge--${mode}`;
      this.titleEl.instance.textContent = `${profile.displayName} Engine Logbook`;
      const tail = tailNumber();
      this.state = loadLogbook(profile, tail, profile.displayName);
      this.trackers = createSessionTrackers(profile);
      this.appendLog(`Detected ${profile.displayName}, tail ${tail}.`);
      const consequences = applyStartConsequences(profile, this.state);
      consequences.logs.forEach((l) => this.appendLog(l));
      for (const idxStr of Object.keys(consequences.engineFailures)) {
        const idx = Number(idxStr);
        if (consequences.engineFailures[idx]) {
          setFailed(idx, true).catch((e) => this.appendLog(`[info] engine ${idx} failure not settable: ${e}`));
        }
      }
      for (const idxStr of Object.keys(consequences.fuelPumpFailures)) {
        const idx = Number(idxStr);
        if (consequences.fuelPumpFailures[idx]) {
          setFuelPumpOn(idx, false).catch((e) => this.appendLog(`[info] engine ${idx} fuel pump not settable: ${e}`));
        }
      }
      saveLogbook(this.state);
      this.subEl.instance.textContent = `${this.state.title} | Tail ${this.state.tailNumber} | Maintenance spend: ${profile.currencySymbol}${this.state.totalSpent.toFixed(2)}`;
      this.rebuildEngineCards();
      this.refreshAll();
      if (this.pollHandle !== null) {
        window.clearInterval(this.pollHandle);
      }
      this.pollHandle = window.setInterval(() => this.poll(), POLL_MS);
    }
    rebuildEngineCards() {
      if (!this.profile) return;
      this.enginesContainer.instance.innerHTML = "";
      this.engineCards = [];
      for (const idx of this.profile.engineIndices) {
        const cardRef = import_msfs_sdk.FSComponent.createRef();
        import_msfs_sdk.FSComponent.render(
          /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent(
            EngineCard,
            {
              ref: cardRef,
              idx,
              profile: this.profile,
              onRepair: () => this.doRepair((p, s) => repairEngine(p, s, idx)),
              onRefillOil: () => this.doRepair((p, s) => refillOil(p, s, idx)),
              onRepairPump: () => this.doRepair((p, s) => repairFuelPump(p, s, idx)),
              onOverhaul: () => this.doRepair((p, s) => overhaulEngine(p, s, idx))
            }
          ),
          this.enginesContainer.instance
        );
        if (cardRef.instance) this.engineCards.push(cardRef.instance);
      }
    }
    doRepair(fn) {
      if (!this.profile || !this.state) return;
      const invoice = fn(this.profile, this.state);
      if (invoice) {
        this.appendLog(
          `Invoice #${invoice.number}: ${invoice.lineItems.map((li) => li.description).join(", ")} -- ${this.profile.currencySymbol}${invoice.total.toFixed(2)}`
        );
        this.appendLog(`Total maintenance spend to date: ${this.profile.currencySymbol}${this.state.totalSpent.toFixed(2)}`);
      }
      saveLogbook(this.state);
      this.refreshAll();
    }
    refreshAll() {
      if (!this.profile || !this.state) return;
      this.subEl.instance.textContent = `${this.state.title} | Tail ${this.state.tailNumber} | Maintenance spend: ${this.profile.currencySymbol}${this.state.totalSpent.toFixed(2)}`;
      this.profile.engineIndices.forEach((idx, i) => {
        const rec = this.state.engines[idx];
        const card = this.engineCards[i];
        if (rec && card) card.update(rec);
      });
      if (this.airframeCardRef.instance) this.airframeCardRef.instance.update(this.state.airframe);
      if (this.systemsCardRef.instance) this.systemsCardRef.instance.update(this.state.airframe);
    }
    appendLog(msg) {
      const line = document.createElement("div");
      line.className = "activity-log__line";
      line.textContent = msg;
      this.logBody.instance.appendChild(line);
      while (this.logBody.instance.children.length > 500) {
        this.logBody.instance.removeChild(this.logBody.instance.firstChild);
      }
      this.logBody.instance.scrollTop = this.logBody.instance.scrollHeight;
    }
    poll() {
      if (!this.profile || !this.state || !this.trackers) return;
      const profile = this.profile;
      const hasCenterGear = profile.id === "duke";
      const gearPercent = hasCenterGear ? gearPercentCenter() : gearPercentLeft();
      const engines = {};
      const generatorOn2 = [];
      for (const idx of profile.engineIndices) {
        engines[idx] = {
          combustionOn: combustionOn(idx),
          oilTempC: oilTempC(idx),
          chtC: chtC(idx),
          oilPressPsi: oilPressPsi(idx),
          manifoldPressInHg: manifoldPressInHg(idx),
          rpm: rpm(idx),
          fuelPressPsi: fuelPressPsi(idx),
          elapsedTimeHr: elapsedTimeHr(idx)
        };
        generatorOn2.push(generatorOn(idx));
      }
      sample(
        profile,
        this.state,
        this.trackers,
        {
          dtSec: POLL_MS / 1e3,
          engines,
          airframe: {
            airspeedKias: airspeedKias(),
            groundSpeedKt: groundSpeedKt(),
            flapsPercent: flapsPercent(),
            gearPercent,
            onGround: onGround(),
            verticalSpeedFpm: verticalSpeedFpm(),
            totalWeightLb: totalWeightLb(),
            brakeLeftPercent: brakeLeftPercent(),
            brakeRightPercent: brakeRightPercent(),
            landingLightOn: landingLightOn(),
            taxiLightOn: taxiLightOn(),
            navLightOn: navLightOn(),
            beaconLightOn: beaconLightOn(),
            generatorOn: generatorOn2
          }
        },
        (msg) => this.appendLog(msg)
      );
      if (this.state.airframe.flapJammed) {
        holdFlapPosition(flapsPercent()).catch(() => {
        });
      }
      if (this.state.airframe.gearJammed) {
        holdGearPosition(gearPercent, hasCenterGear).forEach((p) => p.catch(() => {
        }));
      }
      if (this.state.airframe.brakeFaded) {
        const cap = profile.brakeFadeEffectivenessCapPercent;
        const l = capBrakePosition(cap, brakeLeftPercent());
        if (l) l.catch(() => {
        });
      }
      saveLogbook(this.state);
      this.refreshAll();
    }
    destroy() {
      if (this.pollHandle !== null) window.clearInterval(this.pollHandle);
      super.destroy();
    }
    render() {
      var _a, _b;
      return /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("div", { class: "engine-logbook", ref: this.root }, /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("header", { class: "engine-logbook__header" }, /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("div", { class: "engine-logbook__title-row" }, /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("h2", { ref: this.titleEl }, "Engine Logbook"), /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("div", { class: "engine-logbook__selector" }, /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("span", { class: "engine-logbook__badge", ref: this.badgeEl }, "detecting..."), /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("select", { class: "engine-logbook__dropdown", ref: this.dropdown }))), /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("div", { class: "engine-logbook__sub", ref: this.subEl }, "--")), /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("div", { class: "engine-logbook__engines", ref: this.enginesContainer }), /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent(
        AirframeCard,
        {
          ref: this.airframeCardRef,
          profile: (_a = this.profile) != null ? _a : AIRCRAFT_PROFILES.dc3,
          onRepairFlaps: () => this.doRepair(repairFlaps),
          onRepairGear: () => this.doRepair(repairGear),
          onRepairBrakes: () => this.doRepair(repairBrakes)
        }
      ), /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent(
        SystemsCard,
        {
          ref: this.systemsCardRef,
          profile: (_b = this.profile) != null ? _b : AIRCRAFT_PROFILES.dc3,
          onRepairTires: () => this.doRepair(repairTires),
          onRepairLight: (c) => this.doRepair((p, s) => repairLight(p, s, c)),
          onRepairHydraulics: () => this.doRepair(repairHydraulics),
          onRepairBattery: () => this.doRepair(repairBattery),
          onHundredHourCheck: () => this.doRepair(performHundredHourCheck),
          onOverhaulAirframe: () => this.doRepair(overhaulAirframe)
        }
      ), /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("div", { class: "activity-log" }, /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("div", { class: "activity-log__title" }, "Activity Log"), /* @__PURE__ */ import_msfs_sdk.FSComponent.buildComponent("div", { class: "activity-log__body", ref: this.logBody })));
    }
  };
  __name(_EngineLogbookApp, "EngineLogbookApp");
  var EngineLogbookApp = _EngineLogbookApp;
  var TemplateApp_default = EngineLogbookApp;
})();
//# sourceMappingURL=TemplateApp.js.map
