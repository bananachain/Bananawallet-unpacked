"use strict";
self["webpackHotUpdate_coral_xyz_app_extension"]("popup",{

/***/ "../../node_modules/ethereum-multicall/dist/esm/multicall.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/ethereum-multicall/dist/esm/multicall.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Multicall": function() { return /* binding */ Multicall; }
/* harmony export */ });
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ "../../node_modules/@ethersproject/abi/lib.esm/interface.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ "../../node_modules/@ethersproject/contracts/lib.esm/index.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ "../../node_modules/@ethersproject/constants/lib.esm/addresses.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ "../../node_modules/@ethersproject/bignumber/lib.esm/bignumber.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ "../../node_modules/@ethersproject/providers/lib.esm/index.js");
/* harmony import */ var ethers_lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers/lib/utils */ "../../node_modules/ethers/lib/utils.js");
/* harmony import */ var ethers_lib_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ethers_lib_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums */ "../../node_modules/ethereum-multicall/dist/esm/enums/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../../node_modules/ethereum-multicall/dist/esm/utils.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var Multicall = /** @class */ (function () {
    function Multicall(_options) {
        this._options = _options;
        this.ABI = [
            {
                constant: false,
                inputs: [
                    {
                        components: [
                            { name: 'target', type: 'address' },
                            { name: 'callData', type: 'bytes' },
                        ],
                        name: 'calls',
                        type: 'tuple[]',
                    },
                ],
                name: 'aggregate',
                outputs: [
                    { name: 'blockNumber', type: 'uint256' },
                    { name: 'returnData', type: 'bytes[]' },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        internalType: 'bool',
                        name: 'requireSuccess',
                        type: 'bool',
                    },
                    {
                        components: [
                            {
                                internalType: 'address',
                                name: 'target',
                                type: 'address',
                            },
                            {
                                internalType: 'bytes',
                                name: 'callData',
                                type: 'bytes',
                            },
                        ],
                        internalType: 'struct Multicall2.Call[]',
                        name: 'calls',
                        type: 'tuple[]',
                    },
                ],
                name: 'tryBlockAndAggregate',
                outputs: [
                    {
                        internalType: 'uint256',
                        name: 'blockNumber',
                        type: 'uint256',
                    },
                    {
                        internalType: 'bytes32',
                        name: 'blockHash',
                        type: 'bytes32',
                    },
                    {
                        components: [
                            {
                                internalType: 'bool',
                                name: 'success',
                                type: 'bool',
                            },
                            {
                                internalType: 'bytes',
                                name: 'returnData',
                                type: 'bytes',
                            },
                        ],
                        internalType: 'struct Multicall2.Result[]',
                        name: 'returnData',
                        type: 'tuple[]',
                    },
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
        ];
        if (this._options.web3Instance) {
            this._executionType = _enums__WEBPACK_IMPORTED_MODULE_0__.ExecutionType.web3;
            return;
        }
        if (this._options.ethersProvider) {
            this._executionType = _enums__WEBPACK_IMPORTED_MODULE_0__.ExecutionType.ethers;
            return;
        }
        if (this._options.nodeUrl) {
            this._executionType = _enums__WEBPACK_IMPORTED_MODULE_0__.ExecutionType.customHttp;
            return;
        }
        throw new Error(
        // tslint:disable-next-line: max-line-length
        'Your options passed in our incorrect they need to match either `MulticallOptionsEthers`, `MulticallOptionsWeb3` or `MulticallOptionsCustomJsonRpcProvider` interfaces');
    }
    /**
     * Call all the contract calls in 1
     * @param calls The calls
     */
    Multicall.prototype.call = function (contractCallContexts, contractCallOptions) {
        if (contractCallOptions === void 0) { contractCallOptions = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var aggregateResponse, returnObject, response, contractCallsResults, originalContractCallContext, returnObjectResult, method, methodContext, originalContractCallMethodContext, outputTypes, decodedReturnValues;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!Array.isArray(contractCallContexts)) {
                            contractCallContexts = [contractCallContexts];
                        }
                        return [4 /*yield*/, this.execute(this.buildAggregateCallContext(contractCallContexts), contractCallOptions)];
                    case 1:
                        aggregateResponse = _a.sent();
                        returnObject = {
                            results: {},
                            blockNumber: aggregateResponse.blockNumber,
                        };
                        for (response = 0; response < aggregateResponse.results.length; response++) {
                            contractCallsResults = aggregateResponse.results[response];
                            originalContractCallContext = contractCallContexts[contractCallsResults.contractContextIndex];
                            returnObjectResult = {
                                originalContractCallContext: _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.deepClone(originalContractCallContext),
                                callsReturnContext: [],
                            };
                            for (method = 0; method < contractCallsResults.methodResults.length; method++) {
                                methodContext = contractCallsResults.methodResults[method];
                                originalContractCallMethodContext = originalContractCallContext.calls[methodContext.contractMethodIndex];
                                outputTypes = this.findOutputTypesFromAbi(originalContractCallContext.abi, originalContractCallMethodContext.methodName);
                                if (this._options.tryAggregate && !methodContext.result.success) {
                                    returnObjectResult.callsReturnContext.push(_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.deepClone({
                                        returnValues: [],
                                        decoded: false,
                                        reference: originalContractCallMethodContext.reference,
                                        methodName: originalContractCallMethodContext.methodName,
                                        methodParameters: originalContractCallMethodContext.methodParameters,
                                        success: false,
                                    }));
                                    continue;
                                }
                                if (outputTypes && outputTypes.length > 0) {
                                    try {
                                        decodedReturnValues = ethers_lib_utils__WEBPACK_IMPORTED_MODULE_2__.defaultAbiCoder.decode(
                                        // tslint:disable-next-line: no-any
                                        outputTypes, this.getReturnDataFromResult(methodContext.result));
                                        returnObjectResult.callsReturnContext.push(_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.deepClone({
                                            returnValues: this.formatReturnValues(decodedReturnValues),
                                            decoded: true,
                                            reference: originalContractCallMethodContext.reference,
                                            methodName: originalContractCallMethodContext.methodName,
                                            methodParameters: originalContractCallMethodContext.methodParameters,
                                            success: true,
                                        }));
                                    }
                                    catch (e) {
                                        if (!this._options.tryAggregate) {
                                            throw e;
                                        }
                                        returnObjectResult.callsReturnContext.push(_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.deepClone({
                                            returnValues: [],
                                            decoded: false,
                                            reference: originalContractCallMethodContext.reference,
                                            methodName: originalContractCallMethodContext.methodName,
                                            methodParameters: originalContractCallMethodContext.methodParameters,
                                            success: false,
                                        }));
                                    }
                                }
                                else {
                                    returnObjectResult.callsReturnContext.push(_utils__WEBPACK_IMPORTED_MODULE_1__.Utils.deepClone({
                                        returnValues: this.getReturnDataFromResult(methodContext.result),
                                        decoded: false,
                                        reference: originalContractCallMethodContext.reference,
                                        methodName: originalContractCallMethodContext.methodName,
                                        methodParameters: originalContractCallMethodContext.methodParameters,
                                        success: true,
                                    }));
                                }
                            }
                            returnObject.results[returnObjectResult.originalContractCallContext.reference] = returnObjectResult;
                        }
                        return [2 /*return*/, returnObject];
                }
            });
        });
    };
    /**
     * Get return data from result
     * @param result The result
     */
    // tslint:disable-next-line: no-any
    Multicall.prototype.getReturnDataFromResult = function (result) {
        if (this._options.tryAggregate) {
            return result.returnData;
        }
        return result;
    };
    /**
     * Format return values so its always an array
     * @param decodedReturnValues The decoded return values
     */
    // tslint:disable-next-line: no-any
    Multicall.prototype.formatReturnValues = function (decodedReturnValues) {
        var decodedReturnResults = decodedReturnValues;
        if (decodedReturnValues.length === 1) {
            decodedReturnResults = decodedReturnValues[0];
        }
        if (Array.isArray(decodedReturnResults)) {
            return decodedReturnResults;
        }
        return [decodedReturnResults];
    };
    /**
     * Build aggregate call context
     * @param contractCallContexts The contract call contexts
     */
    Multicall.prototype.buildAggregateCallContext = function (contractCallContexts) {
        var aggregateCallContext = [];
        for (var contract = 0; contract < contractCallContexts.length; contract++) {
            var contractContext = contractCallContexts[contract];
            var executingInterface = new ethers__WEBPACK_IMPORTED_MODULE_3__.Interface(JSON.stringify(contractContext.abi));
            for (var method = 0; method < contractContext.calls.length; method++) {
                // https://github.com/ethers-io/ethers.js/issues/211
                var methodContext = contractContext.calls[method];
                // tslint:disable-next-line: no-unused-expression
                var encodedData = executingInterface.encodeFunctionData(methodContext.methodName, methodContext.methodParameters);
                aggregateCallContext.push({
                    contractContextIndex: _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.deepClone(contract),
                    contractMethodIndex: _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.deepClone(method),
                    target: contractContext.contractAddress,
                    encodedData: encodedData,
                });
            }
        }
        return aggregateCallContext;
    };
    /**
     * Find output types from abi
     * @param abi The abi
     * @param methodName The method name
     */
    Multicall.prototype.findOutputTypesFromAbi = function (abi, methodName) {
        var _a;
        var contract = new ethers__WEBPACK_IMPORTED_MODULE_4__.Contract(ethers__WEBPACK_IMPORTED_MODULE_5__.AddressZero, abi);
        methodName = methodName.trim();
        if (contract.interface.functions[methodName]) {
            return contract.interface.functions[methodName].outputs;
        }
        for (var i = 0; i < abi.length; i++) {
            if (((_a = abi[i].name) === null || _a === void 0 ? void 0 : _a.trim()) === methodName) {
                return abi[i].outputs;
            }
        }
        return undefined;
    };
    /**
     * Execute the multicall contract call
     * @param calls The calls
     */
    Multicall.prototype.execute = function (calls, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this._executionType;
                        switch (_a) {
                            case _enums__WEBPACK_IMPORTED_MODULE_0__.ExecutionType.web3: return [3 /*break*/, 1];
                            case _enums__WEBPACK_IMPORTED_MODULE_0__.ExecutionType.ethers: return [3 /*break*/, 3];
                            case _enums__WEBPACK_IMPORTED_MODULE_0__.ExecutionType.customHttp: return [3 /*break*/, 3];
                        }
                        return [3 /*break*/, 5];
                    case 1: return [4 /*yield*/, this.executeWithWeb3(calls, options)];
                    case 2: return [2 /*return*/, _b.sent()];
                    case 3: return [4 /*yield*/, this.executeWithEthersOrCustom(calls, options)];
                    case 4: return [2 /*return*/, _b.sent()];
                    case 5: throw new Error(this._executionType + " is not defined");
                }
            });
        });
    };
    /**
     * Execute aggregate with web3 instance
     * @param calls The calls context
     */
    Multicall.prototype.executeWithWeb3 = function (calls, options) {
        return __awaiter(this, void 0, void 0, function () {
            var web3, networkId, contract, callParams, contractResponse, contractResponse;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        web3 = this.getTypedOptions().web3Instance;
                        return [4 /*yield*/, web3.eth.net.getId()];
                    case 1:
                        networkId = _c.sent();
                        contract = new web3.eth.Contract(this.ABI, this.getContractBasedOnNetwork(networkId));
                        callParams = [];
                        if (options.blockNumber) {
                            callParams.push(options.blockNumber);
                        }
                        if (!this._options.tryAggregate) return [3 /*break*/, 3];
                        return [4 /*yield*/, (_a = contract.methods
                                .tryBlockAndAggregate(false, this.mapCallContextToMatchContractFormat(calls)))
                                .call.apply(_a, callParams)];
                    case 2:
                        contractResponse = (_c.sent());
                        contractResponse.blockNumber = ethers__WEBPACK_IMPORTED_MODULE_6__.BigNumber.from(contractResponse.blockNumber);
                        return [2 /*return*/, this.buildUpAggregateResponse(contractResponse, calls)];
                    case 3: return [4 /*yield*/, (_b = contract.methods
                            .aggregate(this.mapCallContextToMatchContractFormat(calls)))
                            .call.apply(_b, callParams)];
                    case 4:
                        contractResponse = (_c.sent());
                        contractResponse.blockNumber = ethers__WEBPACK_IMPORTED_MODULE_6__.BigNumber.from(contractResponse.blockNumber);
                        return [2 /*return*/, this.buildUpAggregateResponse(contractResponse, calls)];
                }
            });
        });
    };
    /**
     * Execute with ethers using passed in provider context or custom one
     * @param calls The calls
     */
    Multicall.prototype.executeWithEthersOrCustom = function (calls, options) {
        return __awaiter(this, void 0, void 0, function () {
            var ethersProvider, customProvider, network, contract, overrideOptions, contractResponse, contractResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ethersProvider = this.getTypedOptions()
                            .ethersProvider;
                        if (!ethersProvider) {
                            customProvider = this.getTypedOptions();
                            if (customProvider.nodeUrl) {
                                ethersProvider = new ethers__WEBPACK_IMPORTED_MODULE_7__.JsonRpcProvider(customProvider.nodeUrl);
                            }
                            else {
                                ethersProvider = ethers__WEBPACK_IMPORTED_MODULE_7__.getDefaultProvider();
                            }
                        }
                        return [4 /*yield*/, ethersProvider.getNetwork()];
                    case 1:
                        network = _a.sent();
                        contract = new ethers__WEBPACK_IMPORTED_MODULE_4__.Contract(this.getContractBasedOnNetwork(network.chainId), this.ABI, ethersProvider);
                        overrideOptions = {};
                        if (options.blockNumber) {
                            overrideOptions = __assign(__assign({}, overrideOptions), { blockTag: Number(options.blockNumber) });
                        }
                        if (!this._options.tryAggregate) return [3 /*break*/, 3];
                        return [4 /*yield*/, contract.callStatic.tryBlockAndAggregate(false, this.mapCallContextToMatchContractFormat(calls), overrideOptions)];
                    case 2:
                        contractResponse = (_a.sent());
                        return [2 /*return*/, this.buildUpAggregateResponse(contractResponse, calls)];
                    case 3: return [4 /*yield*/, contract.callStatic.aggregate(this.mapCallContextToMatchContractFormat(calls), overrideOptions)];
                    case 4:
                        contractResponse = (_a.sent());
                        return [2 /*return*/, this.buildUpAggregateResponse(contractResponse, calls)];
                }
            });
        });
    };
    /**
     * Build up the aggregated response from the contract response mapping
     * metadata from the calls
     * @param contractResponse The contract response
     * @param calls The calls
     */
    Multicall.prototype.buildUpAggregateResponse = function (contractResponse, calls) {
        var aggregateResponse = {
            blockNumber: contractResponse.blockNumber.toNumber(),
            results: [],
        };
        var _loop_1 = function (i) {
            var existingResponse = aggregateResponse.results.find(function (c) { return c.contractContextIndex === calls[i].contractContextIndex; });
            if (existingResponse) {
                existingResponse.methodResults.push({
                    result: contractResponse.returnData[i],
                    contractMethodIndex: calls[i].contractMethodIndex,
                });
            }
            else {
                aggregateResponse.results.push({
                    methodResults: [
                        {
                            result: contractResponse.returnData[i],
                            contractMethodIndex: calls[i].contractMethodIndex,
                        },
                    ],
                    contractContextIndex: calls[i].contractContextIndex,
                });
            }
        };
        for (var i = 0; i < contractResponse.returnData.length; i++) {
            _loop_1(i);
        }
        return aggregateResponse;
    };
    /**
     * Map call contract to match contract format
     * @param calls The calls context
     */
    Multicall.prototype.mapCallContextToMatchContractFormat = function (calls) {
        return calls.map(function (call) {
            return {
                target: call.target,
                callData: call.encodedData,
            };
        });
    };
    /**
     * Get typed options
     */
    Multicall.prototype.getTypedOptions = function () {
        return this._options;
    };
    /**
     * Get the contract based on the network
     * @param tryAggregate The tryAggregate
     * @param network The network
     */
    Multicall.prototype.getContractBasedOnNetwork = function (network) {
        // if they have overriden the multicall custom contract address then use that
        if (this._options.multicallCustomContractAddress) {
            return this._options.multicallCustomContractAddress;
        }
        switch (network) {
            case _enums__WEBPACK_IMPORTED_MODULE_0__.Networks.mainnet:
            case _enums__WEBPACK_IMPORTED_MODULE_0__.Networks.kovan:
            case _enums__WEBPACK_IMPORTED_MODULE_0__.Networks.rinkeby:
            case _enums__WEBPACK_IMPORTED_MODULE_0__.Networks.ropsten:
            case _enums__WEBPACK_IMPORTED_MODULE_0__.Networks.goerli:
                return '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696';
            case _enums__WEBPACK_IMPORTED_MODULE_0__.Networks.bsc:
                return '0xC50F4c1E81c873B2204D7eFf7069Ffec6Fbe136D';
            case _enums__WEBPACK_IMPORTED_MODULE_0__.Networks.bsc_testnet:
                return '0x73CCde5acdb9980f54BcCc0483B28B8b4a537b4A';
            case _enums__WEBPACK_IMPORTED_MODULE_0__.Networks.xdai:
                return '0x2325b72990D81892E0e09cdE5C80DD221F147F8B';
            case _enums__WEBPACK_IMPORTED_MODULE_0__.Networks.mumbai:
                return '0xe9939e7Ea7D7fb619Ac57f648Da7B1D425832631';
            case _enums__WEBPACK_IMPORTED_MODULE_0__.Networks.matic:
                return '0x275617327c958bD06b5D6b871E7f491D76113dd8';
            case _enums__WEBPACK_IMPORTED_MODULE_0__.Networks.etherlite:
                return '0x21681750D7ddCB8d1240eD47338dC984f94AF2aC';
            case _enums__WEBPACK_IMPORTED_MODULE_0__.Networks.arbitrum:
                return '0x80C7DD17B01855a6D2347444a0FCC36136a314de';
            case _enums__WEBPACK_IMPORTED_MODULE_0__.Networks.avalancheFuji:
                return '0x3D015943d2780fE97FE3f69C97edA2CCC094f78c';
            case _enums__WEBPACK_IMPORTED_MODULE_0__.Networks.avalancheMainnet:
                return '0xed386Fe855C1EFf2f843B910923Dd8846E45C5A4';
            case _enums__WEBPACK_IMPORTED_MODULE_0__.Networks.fantom:
                return '0xD98e3dBE5950Ca8Ce5a4b59630a5652110403E5c';
            case _enums__WEBPACK_IMPORTED_MODULE_0__.Networks.cronos:
                return '0x5e954f5972EC6BFc7dECd75779F10d848230345F';
            case _enums__WEBPACK_IMPORTED_MODULE_0__.Networks.harmony:
                return '0x5c41f6817feeb65d7b2178b0b9cebfc8fad97969';
            case _enums__WEBPACK_IMPORTED_MODULE_0__.Networks.optimism:
                return '0xeAa6877139d436Dc6d1f75F3aF15B74662617B2C';
            case _enums__WEBPACK_IMPORTED_MODULE_0__.Networks.kovanOptimism:
                return '0x91c88479F21203444D2B20Aa001f951EC8CF2F68';
            case _enums__WEBPACK_IMPORTED_MODULE_0__.Networks.aurora:
                return '0x04364F8908BDCB4cc7EA881d0DE869398BA849C9';
            default:
                throw new Error("Network - " + network + " doesn't have a multicall contract address defined. Please check your network or deploy your own contract on it.");
        }
    };
    return Multicall;
}());



/***/ }),

/***/ "./src/components/Unlocked/Settings/index.tsx":
/*!****************************************************!*\
  !*** ./src/components/Unlocked/Settings/index.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddConnectWalletButton": function() { return /* binding */ AddConnectWalletButton; },
/* harmony export */   "ImportSecretKey": function() { return /* binding */ ImportSecretKey; },
/* harmony export */   "ImportTypeBadge": function() { return /* binding */ ImportTypeBadge; },
/* harmony export */   "SettingsButton": function() { return /* binding */ SettingsButton; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coral-xyz/common */ "../common/dist/esm/index.js");
/* harmony import */ var _coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coral-xyz/recoil */ "../recoil/src/index.ts");
/* harmony import */ var _coral_xyz_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coral-xyz/themes */ "../themes/src/index.tsx");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/icons-material */ "../../node_modules/@mui/icons-material/esm/ExpandLess.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/icons-material */ "../../node_modules/@mui/icons-material/esm/ExpandMore.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @mui/icons-material */ "../../node_modules/@mui/icons-material/esm/Add.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @mui/icons-material */ "../../node_modules/@mui/icons-material/esm/AccountCircleOutlined.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @mui/icons-material */ "../../node_modules/@mui/icons-material/esm/Settings.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @mui/icons-material */ "../../node_modules/@mui/icons-material/esm/Tab.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @mui/icons-material */ "../../node_modules/@mui/icons-material/esm/Lock.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/esm/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/esm/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/esm/Box/Box.js");
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @solana/web3.js */ "../../node_modules/@solana/web3.js/lib/index.browser.esm.js");
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bs58 */ "./node_modules/bs58/index.js");
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bs58__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ethers */ "../../node_modules/@ethersproject/wallet/lib.esm/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../hooks/useCustomAvatar'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/common */ "./src/components/common/index.tsx");
/* harmony import */ var _common_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/Icon */ "./src/components/common/Icon/index.tsx");
/* harmony import */ var _common_Inputs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/Inputs */ "./src/components/common/Inputs.tsx");
/* harmony import */ var _common_Layout_Drawer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/Layout/Drawer */ "./src/components/common/Layout/Drawer.tsx");
/* harmony import */ var _common_Layout_NavStack__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/Layout/NavStack */ "./src/components/common/Layout/NavStack.tsx");
/* harmony import */ var _Locked_Reset_ResetWarning__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../Locked/Reset/ResetWarning */ "./src/components/Locked/Reset/ResetWarning.tsx");
/* harmony import */ var _Unlocked_Balances_RecentActivity__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../Unlocked/Balances/RecentActivity */ "./src/components/Unlocked/Balances/RecentActivity.tsx");
/* harmony import */ var _Balances_Notifications__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Balances/Notifications */ "./src/components/Unlocked/Balances/Notifications.tsx");
/* harmony import */ var _Messages_Contacts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Messages/Contacts */ "./src/components/Unlocked/Messages/Contacts.tsx");
/* harmony import */ var _Preferences_AutoLock__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Preferences/AutoLock */ "./src/components/Unlocked/Settings/Preferences/AutoLock.tsx");
/* harmony import */ var _Preferences_Ethereum__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Preferences/Ethereum */ "./src/components/Unlocked/Settings/Preferences/Ethereum/index.tsx");
/* harmony import */ var _Preferences_Ethereum_Connection__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Preferences/Ethereum/Connection */ "./src/components/Unlocked/Settings/Preferences/Ethereum/Connection.tsx");
/* harmony import */ var _Preferences_Ethereum_CustomRpcUrl__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Preferences/Ethereum/CustomRpcUrl */ "./src/components/Unlocked/Settings/Preferences/Ethereum/CustomRpcUrl.tsx");
/* harmony import */ var _Preferences_Solana__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Preferences/Solana */ "./src/components/Unlocked/Settings/Preferences/Solana/index.tsx");
/* harmony import */ var _Preferences_Solana_Commitment__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Preferences/Solana/Commitment */ "./src/components/Unlocked/Settings/Preferences/Solana/Commitment.tsx");
/* harmony import */ var _Preferences_Solana_ConnectionSwitch__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Preferences/Solana/ConnectionSwitch */ "./src/components/Unlocked/Settings/Preferences/Solana/ConnectionSwitch.tsx");
/* harmony import */ var _Preferences_Solana_CustomRpcUrl__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Preferences/Solana/CustomRpcUrl */ "./src/components/Unlocked/Settings/Preferences/Solana/CustomRpcUrl.tsx");
/* harmony import */ var _Preferences_Solana_Explorer__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Preferences/Solana/Explorer */ "./src/components/Unlocked/Settings/Preferences/Solana/Explorer.tsx");
/* harmony import */ var _Preferences_TrustedSites__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Preferences/TrustedSites */ "./src/components/Unlocked/Settings/Preferences/TrustedSites.tsx");
/* harmony import */ var _Xnfts_Detail__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Xnfts/Detail */ "./src/components/Unlocked/Settings/Xnfts/Detail.tsx");
/* harmony import */ var _YourAccount_ChangePassword__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./YourAccount/ChangePassword */ "./src/components/Unlocked/Settings/YourAccount/ChangePassword.tsx");
/* harmony import */ var _YourAccount_EditWallets__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./YourAccount/EditWallets */ "./src/components/Unlocked/Settings/YourAccount/EditWallets/index.tsx");
/* harmony import */ var _YourAccount_EditWallets_RemoveWallet__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./YourAccount/EditWallets/RemoveWallet */ "./src/components/Unlocked/Settings/YourAccount/EditWallets/RemoveWallet.tsx");
/* harmony import */ var _YourAccount_EditWallets_RenameWallet__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./YourAccount/EditWallets/RenameWallet */ "./src/components/Unlocked/Settings/YourAccount/EditWallets/RenameWallet.tsx");
/* harmony import */ var _YourAccount_EditWallets_WalletDetail__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./YourAccount/EditWallets/WalletDetail */ "./src/components/Unlocked/Settings/YourAccount/EditWallets/WalletDetail.tsx");
/* harmony import */ var _YourAccount_ShowPrivateKey__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./YourAccount/ShowPrivateKey */ "./src/components/Unlocked/Settings/YourAccount/ShowPrivateKey.tsx");
/* harmony import */ var _YourAccount_ShowRecoveryPhrase__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./YourAccount/ShowRecoveryPhrase */ "./src/components/Unlocked/Settings/YourAccount/ShowRecoveryPhrase.tsx");
/* harmony import */ var _AddConnectWallet__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./AddConnectWallet */ "./src/components/Unlocked/Settings/AddConnectWallet/index.tsx");
/* harmony import */ var _Preferences__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./Preferences */ "./src/components/Unlocked/Settings/Preferences/index.tsx");
/* harmony import */ var _UsernamesMenu__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./UsernamesMenu */ "./src/components/Unlocked/Settings/UsernamesMenu.tsx");
/* harmony import */ var _Xnfts__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./Xnfts */ "./src/components/Unlocked/Settings/Xnfts/index.tsx");
/* harmony import */ var _YourAccount__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./YourAccount */ "./src/components/Unlocked/Settings/YourAccount/index.tsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ "../../node_modules/buffer/index.js")["Buffer"];
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
var _s = __webpack_require__.$Refresh$.signature(), _s1 = __webpack_require__.$Refresh$.signature(), _s2 = __webpack_require__.$Refresh$.signature(), _s3 = __webpack_require__.$Refresh$.signature(), _s4 = __webpack_require__.$Refresh$.signature(), _s5 = __webpack_require__.$Refresh$.signature(), _s6 = __webpack_require__.$Refresh$.signature(), _s7 = __webpack_require__.$Refresh$.signature(), _s8 = __webpack_require__.$Refresh$.signature(), _s9 = __webpack_require__.$Refresh$.signature(), _s10 = __webpack_require__.$Refresh$.signature();










































const useStyles = (0,_coral_xyz_themes__WEBPACK_IMPORTED_MODULE_3__.styles)((theme)=>({
        addConnectWalletLabel: {
            color: theme.custom.colors.fontColor
        },
        menuButtonContainer: {
            display: "flex",
            justifyContent: "center",
            flexDirection: "column"
        },
        menuButton: {
            padding: "2px",
            background: `${theme.custom.colors.avatarIconBackground} !important`,
            "&:hover": {
                background: `${theme.custom.colors.avatarIconBackground} !important`,
                backgroundColor: `${theme.custom.colors.avatarIconBackground} !important`,
                opacity: _coral_xyz_themes__WEBPACK_IMPORTED_MODULE_3__.HOVER_OPACITY
            }
        },
        addConnectRoot: {
            background: "transparent !important",
            height: "48px",
            "&:hover": {
                color: `${theme.custom.colors.fontColor} !important`,
                background: "transparent !important"
            }
        },
        privateKeyTextFieldRoot: {
            "& .MuiOutlinedInput-root": {
                border: theme.custom.colors.borderFull,
                "& textarea": {
                    border: "none",
                    borderRadius: 0
                },
                "&:hover fieldset": {
                    border: `solid 2pt ${theme.custom.colors.primaryButton}`
                },
                "&.Mui-focused fieldset": {
                    border: `solid 2pt ${theme.custom.colors.primaryButton} !important`
                }
            }
        }
    }));
function SettingsButton() {
    _s();
    const featureGates = (0,_coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_2__.useFeatureGates)();
    return /*#__PURE__*/ React.createElement("div", {
        style: {
            display: "flex"
        },
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 143,
            columnNumber: 5
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_Unlocked_Balances_RecentActivity__WEBPACK_IMPORTED_MODULE_13__.RecentActivityButton, {
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 144,
            columnNumber: 7
        },
        __self: this
    }), featureGates[_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.NOTIFICATIONS_ENABLED] && /*#__PURE__*/ React.createElement(_Balances_Notifications__WEBPACK_IMPORTED_MODULE_14__.NotificationButton, {
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 145,
            columnNumber: 47
        },
        __self: this
    }), /*#__PURE__*/ React.createElement("div", {
        style: {
            width: "16px"
        },
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 146,
            columnNumber: 7
        },
        __self: this
    }), /*#__PURE__*/ React.createElement(AvatarButton, {
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 147,
            columnNumber: 7
        },
        __self: this
    }));
}
_s(SettingsButton, "l69zG/lbxwrgVbtrXqDzSZr1grY=", false, function() {
    return [
        _coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_2__.useFeatureGates
    ];
});
_c = SettingsButton;
function AvatarButton() {
    _s1();
    const classes = useStyles();
    const [settingsOpen, setSettingsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const avatarUrl = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../hooks/useCustomAvatar'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(32);
    return /*#__PURE__*/ React.createElement("div", {
        className: classes.menuButtonContainer,
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 158,
            columnNumber: 5
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_39__["default"], {
        disableRipple: true,
        className: classes.menuButton,
        onClick: ()=>setSettingsOpen(!settingsOpen),
        size: "large",
        id: "menu-button",
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 159,
            columnNumber: 7
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("img", {
        src: avatarUrl,
        style: {
            width: "32px",
            height: "32px",
            borderRadius: "16px"
        },
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 166,
            columnNumber: 9
        },
        __self: this
    })), /*#__PURE__*/ React.createElement(_common_Layout_Drawer__WEBPACK_IMPORTED_MODULE_10__.WithDrawer, {
        openDrawer: settingsOpen,
        setOpenDrawer: setSettingsOpen,
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 175,
            columnNumber: 7
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("div", {
        style: {
            height: "100%"
        },
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 176,
            columnNumber: 9
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_common_Layout_NavStack__WEBPACK_IMPORTED_MODULE_11__.NavStackEphemeral, {
        initialRoute: {
            name: "root",
            title: "Profile"
        },
        options: ()=>({
                title: ""
            }),
        navButtonLeft: /*#__PURE__*/ React.createElement(_common_Layout_Drawer__WEBPACK_IMPORTED_MODULE_10__.CloseButton, {
            onClick: ()=>setSettingsOpen(false)
        }),
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 177,
            columnNumber: 11
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_common_Layout_NavStack__WEBPACK_IMPORTED_MODULE_11__.NavStackScreen, {
        name: "root",
        component: (props)=>/*#__PURE__*/ React.createElement(SettingsMenu, _extends({}, props)),
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 184,
            columnNumber: 13
        },
        __self: this
    }), /*#__PURE__*/ React.createElement(_common_Layout_NavStack__WEBPACK_IMPORTED_MODULE_11__.NavStackScreen, {
        name: "add-connect-wallet",
        component: (props)=>/*#__PURE__*/ React.createElement(_AddConnectWallet__WEBPACK_IMPORTED_MODULE_34__.AddConnectWalletMenu, _extends({}, props)),
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 188,
            columnNumber: 13
        },
        __self: this
    }), /*#__PURE__*/ React.createElement(_common_Layout_NavStack__WEBPACK_IMPORTED_MODULE_11__.NavStackScreen, {
        name: "import-secret-key",
        component: (props)=>/*#__PURE__*/ React.createElement(ImportSecretKey, _extends({}, props)),
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 192,
            columnNumber: 13
        },
        __self: this
    }), /*#__PURE__*/ React.createElement(_common_Layout_NavStack__WEBPACK_IMPORTED_MODULE_11__.NavStackScreen, {
        name: "your-account",
        component: (props)=>/*#__PURE__*/ React.createElement(_YourAccount__WEBPACK_IMPORTED_MODULE_38__.YourAccount, _extends({}, props)),
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 196,
            columnNumber: 13
        },
        __self: this
    }), /*#__PURE__*/ React.createElement(_common_Layout_NavStack__WEBPACK_IMPORTED_MODULE_11__.NavStackScreen, {
        name: "contacts-list",
        component: (props)=>/*#__PURE__*/ React.createElement(_Messages_Contacts__WEBPACK_IMPORTED_MODULE_15__.Contacts, _extends({}, props)),
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 200,
            columnNumber: 13
        },
        __self: this
    }), /*#__PURE__*/ React.createElement(_common_Layout_NavStack__WEBPACK_IMPORTED_MODULE_11__.NavStackScreen, {
        name: "preferences",
        component: (props)=>/*#__PURE__*/ React.createElement(_Preferences__WEBPACK_IMPORTED_MODULE_35__.Preferences, _extends({}, props)),
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 204,
            columnNumber: 13
        },
        __self: this
    }), /*#__PURE__*/ React.createElement(_common_Layout_NavStack__WEBPACK_IMPORTED_MODULE_11__.NavStackScreen, {
        name: "preferences-auto-lock",
        component: (props)=>/*#__PURE__*/ React.createElement(_Preferences_AutoLock__WEBPACK_IMPORTED_MODULE_16__.PreferencesAutoLock, _extends({}, props)),
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 208,
            columnNumber: 13
        },
        __self: this
    }), /*#__PURE__*/ React.createElement(_common_Layout_NavStack__WEBPACK_IMPORTED_MODULE_11__.NavStackScreen, {
        name: "preferences-trusted-sites",
        component: (props)=>/*#__PURE__*/ React.createElement(_Preferences_TrustedSites__WEBPACK_IMPORTED_MODULE_25__.PreferencesTrustedSites, _extends({}, props)),
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 212,
            columnNumber: 13
        },
        __self: this
    }), /*#__PURE__*/ React.createElement(_common_Layout_NavStack__WEBPACK_IMPORTED_MODULE_11__.NavStackScreen, {
        name: "preferences-solana",
        component: (props)=>/*#__PURE__*/ React.createElement(_Preferences_Solana__WEBPACK_IMPORTED_MODULE_20__.PreferencesSolana, _extends({}, props)),
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 216,
            columnNumber: 13
        },
        __self: this
    }), /*#__PURE__*/ React.createElement(_common_Layout_NavStack__WEBPACK_IMPORTED_MODULE_11__.NavStackScreen, {
        name: "preferences-ethereum",
        component: (props)=>/*#__PURE__*/ React.createElement(_Preferences_Ethereum__WEBPACK_IMPORTED_MODULE_17__.PreferencesEthereum, _extends({}, props)),
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 220,
            columnNumber: 13
        },
        __self: this
    }), /*#__PURE__*/ React.createElement(_common_Layout_NavStack__WEBPACK_IMPORTED_MODULE_11__.NavStackScreen, {
        name: "preferences-solana-rpc-connection",
        component: (props)=>/*#__PURE__*/ React.createElement(_Preferences_Solana_ConnectionSwitch__WEBPACK_IMPORTED_MODULE_22__.PreferencesSolanaConnection, _extends({}, props)),
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 224,
            columnNumber: 13
        },
        __self: this
    }), /*#__PURE__*/ React.createElement(_common_Layout_NavStack__WEBPACK_IMPORTED_MODULE_11__.NavStackScreen, {
        name: "preferences-solana-edit-rpc-connection",
        component: (props)=>/*#__PURE__*/ React.createElement(_Preferences_Solana_CustomRpcUrl__WEBPACK_IMPORTED_MODULE_23__.PreferenceSolanaCustomRpcUrl, _extends({}, props)),
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 230,
            columnNumber: 13
        },
        __self: this
    }), /*#__PURE__*/ React.createElement(_common_Layout_NavStack__WEBPACK_IMPORTED_MODULE_11__.NavStackScreen, {
        name: "preferences-solana-commitment",
        component: (props)=>/*#__PURE__*/ React.createElement(_Preferences_Solana_Commitment__WEBPACK_IMPORTED_MODULE_21__.PreferencesSolanaCommitment, _extends({}, props)),
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 236,
            columnNumber: 13
        },
        __self: this
    }), /*#__PURE__*/ React.createElement(_common_Layout_NavStack__WEBPACK_IMPORTED_MODULE_11__.NavStackScreen, {
        name: "preferences-solana-explorer",
        component: (props)=>/*#__PURE__*/ React.createElement(_Preferences_Solana_Explorer__WEBPACK_IMPORTED_MODULE_24__.PreferencesSolanaExplorer, _extends({}, props)),
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 242,
            columnNumber: 13
        },
        __self: this
    }), /*#__PURE__*/ React.createElement(_common_Layout_NavStack__WEBPACK_IMPORTED_MODULE_11__.NavStackScreen, {
        name: "preferences-ethereum-rpc-connection",
        component: (props)=>/*#__PURE__*/ React.createElement(_Preferences_Ethereum_Connection__WEBPACK_IMPORTED_MODULE_18__.PreferencesEthereumConnection, _extends({}, props)),
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 248,
            columnNumber: 13
        },
        __self: this
    }), /*#__PURE__*/ React.createElement(_common_Layout_NavStack__WEBPACK_IMPORTED_MODULE_11__.NavStackScreen, {
        name: "preferences-ethereum-edit-rpc-connection",
        component: (props)=>/*#__PURE__*/ React.createElement(_Preferences_Ethereum_CustomRpcUrl__WEBPACK_IMPORTED_MODULE_19__.PreferenceEthereumCustomRpcUrl, _extends({}, props)),
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 254,
            columnNumber: 13
        },
        __self: this
    }), /*#__PURE__*/ React.createElement(_common_Layout_NavStack__WEBPACK_IMPORTED_MODULE_11__.NavStackScreen, {
        name: "change-password",
        component: (props)=>/*#__PURE__*/ React.createElement(_YourAccount_ChangePassword__WEBPACK_IMPORTED_MODULE_27__.ChangePassword, _extends({}, props)),
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 260,
            columnNumber: 13
        },
        __self: this
    }), /*#__PURE__*/ React.createElement(_common_Layout_NavStack__WEBPACK_IMPORTED_MODULE_11__.NavStackScreen, {
        name: "edit-wallets",
        component: (props)=>/*#__PURE__*/ React.createElement(_YourAccount_EditWallets__WEBPACK_IMPORTED_MODULE_28__.EditWallets, _extends({}, props)),
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 264,
            columnNumber: 13
        },
        __self: this
    }), /*#__PURE__*/ React.createElement(_common_Layout_NavStack__WEBPACK_IMPORTED_MODULE_11__.NavStackScreen, {
        name: "edit-wallets-wallet-detail",
        component: (props)=>/*#__PURE__*/ React.createElement(_YourAccount_EditWallets_WalletDetail__WEBPACK_IMPORTED_MODULE_31__.WalletDetail, _extends({}, props)),
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 268,
            columnNumber: 13
        },
        __self: this
    }), /*#__PURE__*/ React.createElement(_common_Layout_NavStack__WEBPACK_IMPORTED_MODULE_11__.NavStackScreen, {
        name: "edit-wallets-remove",
        component: (props)=>/*#__PURE__*/ React.createElement(_YourAccount_EditWallets_RemoveWallet__WEBPACK_IMPORTED_MODULE_29__.RemoveWallet, _extends({}, props)),
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 272,
            columnNumber: 13
        },
        __self: this
    }), /*#__PURE__*/ React.createElement(_common_Layout_NavStack__WEBPACK_IMPORTED_MODULE_11__.NavStackScreen, {
        name: "edit-wallets-rename",
        component: (props)=>/*#__PURE__*/ React.createElement(_YourAccount_EditWallets_RenameWallet__WEBPACK_IMPORTED_MODULE_30__.RenameWallet, _extends({}, props)),
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 276,
            columnNumber: 13
        },
        __self: this
    }), /*#__PURE__*/ React.createElement(_common_Layout_NavStack__WEBPACK_IMPORTED_MODULE_11__.NavStackScreen, {
        name: "show-private-key-warning",
        component: (props)=>/*#__PURE__*/ React.createElement(_YourAccount_ShowPrivateKey__WEBPACK_IMPORTED_MODULE_32__.ShowPrivateKeyWarning, _extends({}, props)),
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 280,
            columnNumber: 13
        },
        __self: this
    }), /*#__PURE__*/ React.createElement(_common_Layout_NavStack__WEBPACK_IMPORTED_MODULE_11__.NavStackScreen, {
        name: "show-private-key",
        component: (props)=>/*#__PURE__*/ React.createElement(_YourAccount_ShowPrivateKey__WEBPACK_IMPORTED_MODULE_32__.ShowPrivateKey, _extends({}, props)),
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 284,
            columnNumber: 13
        },
        __self: this
    }), /*#__PURE__*/ React.createElement(_common_Layout_NavStack__WEBPACK_IMPORTED_MODULE_11__.NavStackScreen, {
        name: "show-secret-phrase-warning",
        component: (props)=>/*#__PURE__*/ React.createElement(_YourAccount_ShowRecoveryPhrase__WEBPACK_IMPORTED_MODULE_33__.ShowRecoveryPhraseWarning, _extends({}, props)),
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 288,
            columnNumber: 13
        },
        __self: this
    }), /*#__PURE__*/ React.createElement(_common_Layout_NavStack__WEBPACK_IMPORTED_MODULE_11__.NavStackScreen, {
        name: "show-secret-phrase",
        component: (props)=>/*#__PURE__*/ React.createElement(_YourAccount_ShowRecoveryPhrase__WEBPACK_IMPORTED_MODULE_33__.ShowRecoveryPhrase, _extends({}, props)),
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 294,
            columnNumber: 13
        },
        __self: this
    }), /*#__PURE__*/ React.createElement(_common_Layout_NavStack__WEBPACK_IMPORTED_MODULE_11__.NavStackScreen, {
        name: "reset-warning",
        component: (props)=>/*#__PURE__*/ React.createElement(_Locked_Reset_ResetWarning__WEBPACK_IMPORTED_MODULE_12__.ResetWarning, _extends({}, props)),
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 298,
            columnNumber: 13
        },
        __self: this
    }), /*#__PURE__*/ React.createElement(_common_Layout_NavStack__WEBPACK_IMPORTED_MODULE_11__.NavStackScreen, {
        name: "logout",
        component: (props)=>/*#__PURE__*/ React.createElement(_Locked_Reset_ResetWarning__WEBPACK_IMPORTED_MODULE_12__.Logout, _extends({}, props)),
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 302,
            columnNumber: 13
        },
        __self: this
    }), /*#__PURE__*/ React.createElement(_common_Layout_NavStack__WEBPACK_IMPORTED_MODULE_11__.NavStackScreen, {
        name: "xnfts",
        component: (props)=>/*#__PURE__*/ React.createElement(_Xnfts__WEBPACK_IMPORTED_MODULE_37__.XnftSettings, _extends({}, props)),
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 306,
            columnNumber: 13
        },
        __self: this
    }), /*#__PURE__*/ React.createElement(_common_Layout_NavStack__WEBPACK_IMPORTED_MODULE_11__.NavStackScreen, {
        name: "xnfts-detail",
        component: (props)=>/*#__PURE__*/ React.createElement(_Xnfts_Detail__WEBPACK_IMPORTED_MODULE_26__.XnftDetail, _extends({}, props)),
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 310,
            columnNumber: 13
        },
        __self: this
    })))));
}
_s1(AvatarButton, "9sASvXbMDIGxn4nvdH9QlxnU8uk=", false, function() {
    return [
        useStyles,
        Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../hooks/useCustomAvatar'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    ];
});
_c1 = AvatarButton;
function SettingsMenu() {
    _s2();
    const { setTitle  } = (0,_common_Layout_NavStack__WEBPACK_IMPORTED_MODULE_11__.useNavStack)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setTitle(/*#__PURE__*/ React.createElement(_UsernamesMenu__WEBPACK_IMPORTED_MODULE_36__.UserAccountsMenuButton, {
            __source: {
                fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
                lineNumber: 325,
                columnNumber: 14
            },
            __self: this
        }));
    }, [
        setTitle
    ]);
    return /*#__PURE__*/ React.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
        fallback: /*#__PURE__*/ React.createElement("div", null),
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 329,
            columnNumber: 5
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_SettingsContent, {
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 330,
            columnNumber: 7
        },
        __self: this
    }));
}
_s2(SettingsMenu, "/So1UlJRI2tiN9Ni3yJ0S0pdLHE=", false, function() {
    return [
        _common_Layout_NavStack__WEBPACK_IMPORTED_MODULE_11__.useNavStack
    ];
});
_c2 = SettingsMenu;
function _SettingsContent() {
    _s3();
    const { close  } = (0,_common_Layout_Drawer__WEBPACK_IMPORTED_MODULE_10__.useDrawerContext)();
    return /*#__PURE__*/ React.createElement("div", {
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 338,
            columnNumber: 5
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(AvatarHeader, {
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 339,
            columnNumber: 7
        },
        __self: this
    }), /*#__PURE__*/ React.createElement(WalletLists, {
        close: close,
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 340,
            columnNumber: 7
        },
        __self: this
    }), /*#__PURE__*/ React.createElement(SettingsList, {
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 341,
            columnNumber: 7
        },
        __self: this
    }));
}
_s3(_SettingsContent, "wS8Bk1QauCknGgE3T0XMrdPNibQ=", false, function() {
    return [
        _common_Layout_Drawer__WEBPACK_IMPORTED_MODULE_10__.useDrawerContext
    ];
});
function AvatarHeader() {
    _s4();
    const theme = (0,_coral_xyz_themes__WEBPACK_IMPORTED_MODULE_3__.useCustomTheme)();
    const avatarUrl = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../hooks/useCustomAvatar'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(64);
    return /*#__PURE__*/ React.createElement("div", {
        style: {
            marginTop: "16px",
            marginBottom: "36px"
        },
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 350,
            columnNumber: 5
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("div", {
        style: {
            background: theme.custom.colors.avatarIconBackground,
            borderRadius: "40px",
            padding: "3px",
            width: "70px",
            height: "70px",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block"
        },
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 351,
            columnNumber: 7
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("img", {
        src: avatarUrl,
        style: {
            width: "64px",
            height: "64px",
            borderRadius: "32px",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block"
        },
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 363,
            columnNumber: 9
        },
        __self: this
    })));
}
_s4(AvatarHeader, "NaR97Eo3o06kMglaDJ2eFH1kscA=", false, function() {
    return [
        _coral_xyz_themes__WEBPACK_IMPORTED_MODULE_3__.useCustomTheme,
        Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../hooks/useCustomAvatar'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    ];
});
_c3 = AvatarHeader;
function WalletLists({ close  }) {
    _s5();
    const blockchainKeyrings = (0,_coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_2__.useWalletPublicKeys)();
    return /*#__PURE__*/ React.createElement(React.Fragment, null, Object.entries(blockchainKeyrings).map(([blockchain, keyring])=>/*#__PURE__*/ React.createElement(WalletList, {
            key: blockchain,
            blockchain: blockchain,
            keyring: keyring,
            close: close,
            __source: {
                fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
                lineNumber: 384,
                columnNumber: 9
            },
            __self: this
        })));
}
_s5(WalletLists, "DWITCI2+kr4QPvZFy3uDo/+SPTc=", false, function() {
    return [
        _coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_2__.useWalletPublicKeys
    ];
});
_c4 = WalletLists;
function WalletList({ blockchain , keyring , close  }) {
    _s6();
    const background = (0,_coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_2__.useBackgroundClient)();
    const activeWallets = (0,_coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_2__.useActiveWallets)();
    const theme = (0,_coral_xyz_themes__WEBPACK_IMPORTED_MODULE_3__.useCustomTheme)();
    const blockchainLogo = (0,_coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_2__.useBlockchainLogo)(blockchain);
    const [showAll, setShowAll] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const clickWallet = (publicKey)=>{
        background.request({
            method: _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.UI_RPC_METHOD_KEYRING_ACTIVE_WALLET_UPDATE,
            params: [
                publicKey,
                blockchain
            ]
        }).then((_resp)=>close()).catch(console.error);
    };
    let activeWalletType;
    const keys = keyring.hdPublicKeys.map((k)=>({
            ...k,
            type: "derived"
        })).concat(keyring.importedPublicKeys.map((k)=>({
            ...k,
            type: "imported"
        }))).concat(keyring.ledgerPublicKeys.map((k)=>({
            ...k,
            type: "hardware"
        })))// The drop down should show all wallet keys *except* the active one.
    .filter(({ publicKey , type  })=>{
        const isActive = activeWallets.map((p)=>p.publicKey).includes(publicKey);
        if (isActive) {
            activeWalletType = type;
        }
        return !isActive;
    });
    const { name , publicKey  } = activeWallets.filter((a)=>a.blockchain === blockchain)[0];
    return /*#__PURE__*/ React.createElement("div", {
        style: {
            marginBottom: "16px",
            marginLeft: "16px",
            marginRight: "16px"
        },
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 449,
            columnNumber: 5
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("div", {
        style: {
            border: `${theme.custom.colors.borderFull}`,
            borderRadius: "10px"
        },
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 456,
            columnNumber: 7
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("div", {
        style: {
            display: "flex"
        },
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 462,
            columnNumber: 9
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_components_common__WEBPACK_IMPORTED_MODULE_7__.ListItem, {
        disableRipple: true,
        style: {
            background: theme.custom.colors.nav,
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
            borderBottomLeftRadius: showAll && keys.length > 0 ? "0px" : "8px",
            borderBottomRightRadius: showAll && keys.length > 0 ? "0px" : "8px",
            height: "48px",
            display: "flex",
            paddingLeft: "12px",
            paddingRight: "12px",
            flex: 1
        },
        onClick: ()=>setShowAll((s)=>!s),
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 467,
            columnNumber: 11
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("div", {
        style: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%"
        },
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 485,
            columnNumber: 13
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("div", {
        style: {
            display: "flex"
        },
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 493,
            columnNumber: 15
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("div", {
        style: {
            display: "flex",
            justifyContent: "center",
            flexDirection: "column"
        },
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 498,
            columnNumber: 17
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("img", {
        src: blockchainLogo,
        style: {
            width: "12px",
            borderRadius: "2px"
        },
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 505,
            columnNumber: 19
        },
        __self: this
    })), /*#__PURE__*/ React.createElement("div", {
        style: {
            marginLeft: "8px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column"
        },
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 513,
            columnNumber: 17
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_components_common__WEBPACK_IMPORTED_MODULE_7__.WalletAddress, {
        name: name,
        publicKey: publicKey,
        style: {
            fontWeight: 500,
            lineHeight: "24px",
            fontSize: "16px"
        },
        nameStyle: {
            color: theme.custom.colors.fontColor,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "75px"
        },
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 521,
            columnNumber: 19
        },
        __self: this
    })), /*#__PURE__*/ React.createElement("div", {
        style: {
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            marginLeft: "4px"
        },
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 538,
            columnNumber: 17
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(ImportTypeBadge, {
        type: activeWalletType,
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 546,
            columnNumber: 19
        },
        __self: this
    }))), /*#__PURE__*/ React.createElement("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
        },
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 549,
            columnNumber: 15
        },
        __self: this
    }, showAll ? /*#__PURE__*/ React.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_40__["default"], {
        style: {
            width: "22px",
            color: theme.custom.colors.icon
        },
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 557,
            columnNumber: 19
        },
        __self: this
    }) : /*#__PURE__*/ React.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_41__["default"], {
        style: {
            width: "22px",
            color: theme.custom.colors.icon
        },
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 564,
            columnNumber: 19
        },
        __self: this
    }))))), showAll && /*#__PURE__*/ React.createElement("div", {
        style: {},
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 576,
            columnNumber: 11
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_components_common__WEBPACK_IMPORTED_MODULE_7__.List, {
        style: {
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0
        },
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 577,
            columnNumber: 13
        },
        __self: this
    }, keys.map(({ name , publicKey , type  }, idx)=>{
        return /*#__PURE__*/ React.createElement(_components_common__WEBPACK_IMPORTED_MODULE_7__.ListItem, {
            key: publicKey.toString(),
            onClick: ()=>clickWallet(publicKey),
            isFirst: false,
            isLast: idx === keys.length - 1,
            style: {
                paddingTop: "16px",
                paddingBottom: "16px",
                paddingLeft: "12px",
                paddingRight: "12px",
                height: "48px"
            },
            __source: {
                fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
                lineNumber: 594,
                columnNumber: 21
            },
            __self: this
        }, /*#__PURE__*/ React.createElement("div", {
            style: {
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                marginLeft: "20px"
            },
            __source: {
                fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
                lineNumber: 607,
                columnNumber: 23
            },
            __self: this
        }, /*#__PURE__*/ React.createElement("div", {
            style: {
                display: "flex"
            },
            __source: {
                fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
                lineNumber: 615,
                columnNumber: 25
            },
            __self: this
        }, /*#__PURE__*/ React.createElement("div", {
            style: {
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                marginRight: "4px"
            },
            __source: {
                fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
                lineNumber: 620,
                columnNumber: 27
            },
            __self: this
        }, /*#__PURE__*/ React.createElement(_components_common__WEBPACK_IMPORTED_MODULE_7__.WalletAddress, {
            name: name,
            publicKey: publicKey,
            style: {
                fontWeight: 500,
                lineHeight: "24px",
                fontSize: "16px"
            },
            nameStyle: {
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: "75px"
            },
            __source: {
                fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
                lineNumber: 628,
                columnNumber: 29
            },
            __self: this
        })), /*#__PURE__*/ React.createElement("div", {
            style: {
                display: "flex",
                justifyContent: "center",
                flexDirection: "column"
            },
            __source: {
                fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
                lineNumber: 644,
                columnNumber: 27
            },
            __self: this
        }, /*#__PURE__*/ React.createElement(ImportTypeBadge, {
            type: type,
            __source: {
                fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
                lineNumber: 651,
                columnNumber: 29
            },
            __self: this
        })))));
    })))), showAll && /*#__PURE__*/ React.createElement(AddConnectWalletButton, {
        blockchain: blockchain,
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 663,
            columnNumber: 19
        },
        __self: this
    }));
}
_s6(WalletList, "wmQRnptcRcE3UmDWuiGER3c9ATw=", false, function() {
    return [
        _coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_2__.useBackgroundClient,
        _coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_2__.useActiveWallets,
        _coral_xyz_themes__WEBPACK_IMPORTED_MODULE_3__.useCustomTheme,
        _coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_2__.useBlockchainLogo
    ];
});
_c5 = WalletList;
function ImportTypeBadge({ type  }) {
    _s7();
    const theme = (0,_coral_xyz_themes__WEBPACK_IMPORTED_MODULE_3__.useCustomTheme)();
    return type === "derived" ? /*#__PURE__*/ React.createElement(React.Fragment, null) : /*#__PURE__*/ React.createElement("div", {
        style: {
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingTop: "2px",
            paddingBottom: "2px",
            backgroundColor: theme.custom.colors.bg2,
            height: "20px",
            borderRadius: "10px"
        },
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 673,
            columnNumber: 5
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_42__["default"], {
        style: {
            color: theme.custom.colors.fontColor,
            fontSize: "12px",
            lineHeight: "16px",
            fontWeight: 600
        },
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 684,
            columnNumber: 7
        },
        __self: this
    }, type === "imported" ? "IMPORTED" : "HARDWARE"));
}
_s7(ImportTypeBadge, "EUWLPhliQbTzY6cWvepxLA4f8h0=", false, function() {
    return [
        _coral_xyz_themes__WEBPACK_IMPORTED_MODULE_3__.useCustomTheme
    ];
});
_c6 = ImportTypeBadge;
const AddConnectWalletButton = ({ blockchain  })=>{
    _s8();
    const nav = (0,_common_Layout_NavStack__WEBPACK_IMPORTED_MODULE_11__.useNavStack)();
    const classes = useStyles();
    const theme = (0,_coral_xyz_themes__WEBPACK_IMPORTED_MODULE_3__.useCustomTheme)();
    return /*#__PURE__*/ React.createElement(_components_common__WEBPACK_IMPORTED_MODULE_7__.List, {
        style: {
            background: "transparent",
            color: theme.custom.colors.secondary,
            marginLeft: 0,
            marginRight: 0,
            height: "48px"
        },
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 707,
            columnNumber: 5
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement(_components_common__WEBPACK_IMPORTED_MODULE_7__.ListItem, {
        isFirst: false,
        isLast: true,
        onClick: ()=>nav.push("add-connect-wallet", {
                blockchain
            }),
        classes: {
            root: classes.addConnectRoot
        },
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 716,
            columnNumber: 7
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement("div", {
        style: {
            border: `solid ${theme.custom.colors.nav}`,
            borderRadius: "40px",
            width: "30px",
            height: "30px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            marginRight: "12px"
        },
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 722,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ React.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_43__["default"], {
        style: {
            color: "inherit",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: "14px"
        },
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 734,
            columnNumber: 11
        },
        __self: undefined
    })), /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_42__["default"], {
        style: {
            display: "flex",
            justifyContent: "center",
            flexDirection: "column"
        },
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 744,
            columnNumber: 9
        },
        __self: undefined
    }, "Add / Connect Wallet")));
};
_s8(AddConnectWalletButton, "vp7IEeWGr2GToiE6Rx4OgX6TdB4=", false, function() {
    return [
        _common_Layout_NavStack__WEBPACK_IMPORTED_MODULE_11__.useNavStack,
        useStyles,
        _coral_xyz_themes__WEBPACK_IMPORTED_MODULE_3__.useCustomTheme
    ];
});
_c7 = AddConnectWalletButton;
function SettingsList() {
    _s9();
    const theme = (0,_coral_xyz_themes__WEBPACK_IMPORTED_MODULE_3__.useCustomTheme)();
    const nav = (0,_common_Layout_NavStack__WEBPACK_IMPORTED_MODULE_11__.useNavStack)();
    const background = (0,_coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_2__.useBackgroundClient)();
    const featureGates = (0,_coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_2__.useFeatureGates)();
    const lockWallet = ()=>{
        background.request({
            method: _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.UI_RPC_METHOD_KEYRING_STORE_LOCK,
            params: []
        }).catch(console.error);
    };
    const settingsMenu = [
        {
            label: "Your Account",
            onClick: ()=>nav.push("your-account"),
            icon: (props)=>/*#__PURE__*/ React.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_44__["default"], _extends({}, props, {
                    __source: {
                        fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
                        lineNumber: 777,
                        columnNumber: 29
                    },
                    __self: this
                })),
            detailIcon: /*#__PURE__*/ React.createElement(_components_common__WEBPACK_IMPORTED_MODULE_7__.PushDetail, {
                __source: {
                    fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
                    lineNumber: 778,
                    columnNumber: 19
                },
                __self: this
            })
        },
        {
            label: "Preferences",
            onClick: ()=>nav.push("preferences"),
            icon: (props)=>/*#__PURE__*/ React.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_45__["default"], _extends({}, props, {
                    __source: {
                        fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
                        lineNumber: 783,
                        columnNumber: 29
                    },
                    __self: this
                })),
            detailIcon: /*#__PURE__*/ React.createElement(_components_common__WEBPACK_IMPORTED_MODULE_7__.PushDetail, {
                __source: {
                    fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
                    lineNumber: 784,
                    columnNumber: 19
                },
                __self: this
            })
        }
    ];
    if (_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.BACKPACK_FEATURE_XNFT) {
    // Removed xNFTs menu item to prevent access to xNFT component
    // settingsMenu.push({
    //   label: "xNFTs",
    //   onClick: () => nav.push("xnfts"),
    //   icon: (props: any) => (
    //     <div
    //       style={{
    //         display: "flex",
    //         justifyContent: "center",
    //         flexDirection: "column",
    //       }}
    //     >
    //       <GridIcon
    //         {...props}
    //         style={{ ...props.style, width: "24px", height: "20px" }}
    //       />
    //     </div>
    //   ),
    //   detailIcon: <PushDetail />,
    // });
    }
    if (_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.BACKPACK_FEATURE_POP_MODE) {
        settingsMenu.push({
            label: "Pop Window",
            onClick: ()=>{
                (0,_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.openPopupWindow)("popup.html");
                window.close();
            },
            icon: (props)=>/*#__PURE__*/ React.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_46__["default"], _extends({}, props, {
                    __source: {
                        fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
                        lineNumber: 816,
                        columnNumber: 29
                    },
                    __self: this
                })),
            detailIcon: /*#__PURE__*/ React.createElement(_components_common__WEBPACK_IMPORTED_MODULE_7__.LaunchDetail, {
                __source: {
                    fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
                    lineNumber: 817,
                    columnNumber: 19
                },
                __self: this
            })
        });
    }
    settingsMenu.push({
        label: "Lock Wallet",
        onClick: ()=>lockWallet(),
        icon: (props)=>/*#__PURE__*/ React.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_47__["default"], _extends({}, props, {
                __source: {
                    fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
                    lineNumber: 823,
                    columnNumber: 27
                },
                __self: this
            })),
        detailIcon: /*#__PURE__*/ React.createElement(React.Fragment, null)
    });
    const supportList = [
        {
            label: "Support",
            onClick: ()=>window.open("https://t.me/bananachainonsol", "_blank"),
            icon: (props)=>/*#__PURE__*/ React.createElement(_common_Icon__WEBPACK_IMPORTED_MODULE_8__.ContactsIcon, _extends({}, props, {
                    __source: {
                        fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
                        lineNumber: 831,
                        columnNumber: 29
                    },
                    __self: this
                })),
            detailIcon: /*#__PURE__*/ React.createElement(_components_common__WEBPACK_IMPORTED_MODULE_7__.LaunchDetail, {
                __source: {
                    fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
                    lineNumber: 832,
                    columnNumber: 19
                },
                __self: this
            })
        }
    ];
    const contactList = [
        {
            label: "Contacts",
            onClick: ()=>nav.push("contacts-list"),
            icon: (props)=>/*#__PURE__*/ React.createElement(_common_Icon__WEBPACK_IMPORTED_MODULE_8__.ContactsIcon, _extends({}, props, {
                    __source: {
                        fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
                        lineNumber: 840,
                        columnNumber: 29
                    },
                    __self: this
                })),
            detailIcon: /*#__PURE__*/ React.createElement(_components_common__WEBPACK_IMPORTED_MODULE_7__.PushDetail, {
                __source: {
                    fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
                    lineNumber: 841,
                    columnNumber: 19
                },
                __self: this
            })
        }
    ];
    return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(_components_common__WEBPACK_IMPORTED_MODULE_7__.List, {
        style: {
            marginTop: "24px",
            marginBottom: "16px",
            border: `${theme.custom.colors.borderFull}`,
            borderRadius: "10px"
        },
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 847,
            columnNumber: 7
        },
        __self: this
    }, settingsMenu.map((s, idx)=>{
        return /*#__PURE__*/ React.createElement(_components_common__WEBPACK_IMPORTED_MODULE_7__.ListItem, {
            key: s.label,
            isFirst: idx === 0,
            isLast: idx === settingsMenu.length - 1,
            onClick: s.onClick,
            id: s.label,
            style: {
                height: "44px",
                padding: "12px"
            },
            detail: s.detailIcon,
            __source: {
                fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
                lineNumber: 857,
                columnNumber: 13
            },
            __self: this
        }, /*#__PURE__*/ React.createElement("div", {
            style: {
                display: "flex",
                flex: 1
            },
            __source: {
                fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
                lineNumber: 869,
                columnNumber: 15
            },
            __self: this
        }, s.icon({
            style: {
                color: theme.custom.colors.icon,
                marginRight: "8px",
                height: "24px",
                width: "24px"
            },
            fill: theme.custom.colors.icon
        }), /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_42__["default"], {
            style: {
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "24px"
            },
            __source: {
                fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
                lineNumber: 884,
                columnNumber: 17
            },
            __self: this
        }, s.label)));
    })), featureGates[_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.MESSAGES_ENABLED] && /*#__PURE__*/ React.createElement(_components_common__WEBPACK_IMPORTED_MODULE_7__.List, {
        style: {
            marginTop: "24px",
            marginBottom: "16px",
            border: `${theme.custom.colors.borderFull}`,
            borderRadius: "10px"
        },
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 900,
            columnNumber: 9
        },
        __self: this
    }, contactList.map((s, idx)=>{
        return /*#__PURE__*/ React.createElement(_components_common__WEBPACK_IMPORTED_MODULE_7__.ListItem, {
            key: s.label,
            isFirst: idx === 0,
            isLast: idx === contactList.length - 1,
            onClick: s.onClick,
            id: s.label,
            style: {
                height: "44px",
                padding: "12px"
            },
            detail: s.detailIcon,
            __source: {
                fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
                lineNumber: 910,
                columnNumber: 15
            },
            __self: this
        }, /*#__PURE__*/ React.createElement("div", {
            style: {
                display: "flex",
                flex: 1
            },
            __source: {
                fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
                lineNumber: 922,
                columnNumber: 17
            },
            __self: this
        }, s.icon({
            style: {
                color: theme.custom.colors.icon,
                height: "24px",
                width: "24px"
            },
            fill: theme.custom.colors.icon
        }), /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_42__["default"], {
            style: {
                marginLeft: "8px",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "24px"
            },
            __source: {
                fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
                lineNumber: 936,
                columnNumber: 19
            },
            __self: this
        }, s.label)));
    })), /*#__PURE__*/ React.createElement(_components_common__WEBPACK_IMPORTED_MODULE_7__.List, {
        style: {
            marginTop: "24px",
            marginBottom: "16px",
            border: `${theme.custom.colors.borderFull}`,
            borderRadius: "10px"
        },
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 953,
            columnNumber: 7
        },
        __self: this
    }, supportList.map((s, idx)=>{
        return /*#__PURE__*/ React.createElement(_components_common__WEBPACK_IMPORTED_MODULE_7__.ListItem, {
            key: s.label,
            isFirst: idx === 0,
            isLast: idx === supportList.length - 1,
            onClick: s.onClick,
            id: s.label,
            style: {
                height: "44px",
                padding: "12px"
            },
            detail: s.detailIcon,
            __source: {
                fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
                lineNumber: 963,
                columnNumber: 13
            },
            __self: this
        }, /*#__PURE__*/ React.createElement("div", {
            style: {
                display: "flex",
                flex: 1
            },
            __source: {
                fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
                lineNumber: 975,
                columnNumber: 15
            },
            __self: this
        }, s.icon({
            style: {
                color: theme.custom.colors.icon,
                height: "24px",
                width: "24px"
            },
            fill: theme.custom.colors.icon
        }), /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_42__["default"], {
            style: {
                marginLeft: "8px",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "24px"
            },
            __source: {
                fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
                lineNumber: 989,
                columnNumber: 17
            },
            __self: this
        }, s.label)));
    })));
}
_s9(SettingsList, "Ldy7PqSf3LAkLbfYJhg4Ua5XTp8=", false, function() {
    return [
        _coral_xyz_themes__WEBPACK_IMPORTED_MODULE_3__.useCustomTheme,
        _common_Layout_NavStack__WEBPACK_IMPORTED_MODULE_11__.useNavStack,
        _coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_2__.useBackgroundClient,
        _coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_2__.useFeatureGates
    ];
});
_c8 = SettingsList;
function ImportSecretKey({ blockchain  }) {
    _s10();
    const background = (0,_coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_2__.useBackgroundClient)();
    const existingPublicKeys = (0,_coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_2__.useWalletPublicKeys)();
    const nav = (0,_common_Layout_NavStack__WEBPACK_IMPORTED_MODULE_11__.useNavStack)();
    const theme = (0,_coral_xyz_themes__WEBPACK_IMPORTED_MODULE_3__.useCustomTheme)();
    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [secretKey, setSecretKey] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [openDrawer, setOpenDrawer] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [newPublicKey, setNewPublicKey] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const prevTitle = nav.title;
        nav.setTitle("");
        return ()=>{
            nav.setTitle(prevTitle);
        };
    }, [
        theme
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        // Clear error on form input changes
        setError(null);
    }, [
        name,
        secretKey
    ]);
    const save = async (e)=>{
        e.preventDefault();
        let secretKeyHex;
        try {
            secretKeyHex = validateSecretKey(blockchain, secretKey, existingPublicKeys);
        } catch (e1) {
            setError(e1.message);
            return;
        }
        const publicKey = await background.request({
            method: _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.UI_RPC_METHOD_KEYRING_IMPORT_SECRET_KEY,
            params: [
                blockchain,
                secretKeyHex,
                name
            ]
        });
        await background.request({
            method: _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.UI_RPC_METHOD_KEYRING_ACTIVE_WALLET_UPDATE,
            params: [
                publicKey,
                blockchain
            ]
        });
        setNewPublicKey(publicKey);
        setOpenDrawer(true);
    };
    return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("form", {
        onSubmit: save,
        style: {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between"
        },
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 1063,
            columnNumber: 7
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_48__["default"], {
        sx: {
            margin: "24px 0"
        },
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 1072,
            columnNumber: 9
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_48__["default"], {
        sx: {
            margin: "0 24px"
        },
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 1073,
            columnNumber: 11
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_components_common__WEBPACK_IMPORTED_MODULE_7__.Header, {
        text: "Import private key",
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 1074,
            columnNumber: 13
        },
        __self: this
    }), /*#__PURE__*/ React.createElement(_components_common__WEBPACK_IMPORTED_MODULE_7__.SubtextParagraph, {
        style: {
            marginBottom: "32px"
        },
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 1075,
            columnNumber: 13
        },
        __self: this
    }, "Enter your private key. It will be encrypted and stored on your device.")), /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_48__["default"], {
        sx: {
            margin: "0 16px"
        },
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 1080,
            columnNumber: 11
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_48__["default"], {
        sx: {
            marginBottom: "4px"
        },
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 1081,
            columnNumber: 13
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_common_Inputs__WEBPACK_IMPORTED_MODULE_9__.TextInput, {
        autoFocus: true,
        placeholder: "Name",
        value: name,
        setValue: (e)=>setName(e.target.value),
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 1082,
            columnNumber: 15
        },
        __self: this
    })), /*#__PURE__*/ React.createElement(_common_Inputs__WEBPACK_IMPORTED_MODULE_9__.TextInput, {
        placeholder: "Enter private key",
        value: secretKey,
        setValue: (e)=>{
            setSecretKey(e.target.value);
        },
        onKeyDown: (e)=>{
            if (e.key === "Enter") {
                save(e);
            }
        },
        rows: 4,
        error: error ? true : false,
        errorMessage: error || "",
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 1089,
            columnNumber: 13
        },
        __self: this
    }))), /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_48__["default"], {
        sx: {
            marginLeft: "16px",
            marginRight: "16px",
            marginBottom: "16px",
            display: "flex",
            justifyContent: "space-between"
        },
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 1106,
            columnNumber: 9
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_components_common__WEBPACK_IMPORTED_MODULE_7__.PrimaryButton, {
        type: "submit",
        label: "Import",
        disabled: secretKey.length === 0,
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 1115,
            columnNumber: 11
        },
        __self: this
    }))), /*#__PURE__*/ React.createElement(_common_Layout_Drawer__WEBPACK_IMPORTED_MODULE_10__.WithMiniDrawer, {
        openDrawer: openDrawer,
        setOpenDrawer: setOpenDrawer,
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 1122,
            columnNumber: 7
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_AddConnectWallet__WEBPACK_IMPORTED_MODULE_34__.ConfirmCreateWallet, {
        blockchain: blockchain,
        publicKey: newPublicKey,
        setOpenDrawer: setOpenDrawer,
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/Settings/index.tsx",
            lineNumber: 1123,
            columnNumber: 9
        },
        __self: this
    })));
}
_s10(ImportSecretKey, "pOS7MVahjvyRBZX5A5KxopWaaPY=", false, function() {
    return [
        _coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_2__.useBackgroundClient,
        _coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_2__.useWalletPublicKeys,
        _common_Layout_NavStack__WEBPACK_IMPORTED_MODULE_11__.useNavStack,
        _coral_xyz_themes__WEBPACK_IMPORTED_MODULE_3__.useCustomTheme
    ];
});
_c9 = ImportSecretKey;
// Validate a secret key and return a normalised hex representation
function validateSecretKey(blockchain, secretKey, keyring) {
    // Extract public keys from keychain object into array of strings
    const existingPublicKeys = Object.values(keyring[blockchain]).map((k)=>k.map((i)=>i.publicKey)).flat();
    if (blockchain === _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.Blockchain.SOLANA) {
        let keypair = null;
        try {
            // Attempt to create a keypair from JSON secret key
            keypair = _solana_web3_js__WEBPACK_IMPORTED_MODULE_4__.Keypair.fromSecretKey(new Uint8Array(JSON.parse(secretKey)));
        } catch (_1) {
            try {
                // Attempt to create a keypair from bs58 decode of secret key
                keypair = _solana_web3_js__WEBPACK_IMPORTED_MODULE_4__.Keypair.fromSecretKey(new Uint8Array(bs58__WEBPACK_IMPORTED_MODULE_5__.decode(secretKey)));
            } catch (_) {
                // Failure
                throw new Error("Invalid private key");
            }
        }
        if (existingPublicKeys.includes(keypair.publicKey.toString())) {
            throw new Error("Key already exists");
        }
        return Buffer.from(keypair.secretKey).toString("hex");
    } else if (blockchain === _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.Blockchain.ETHEREUM) {
        try {
            const wallet = new ethers__WEBPACK_IMPORTED_MODULE_49__.Wallet(secretKey);
            if (existingPublicKeys.includes(wallet.publicKey)) {
                throw new Error("Key already exists");
            }
            return wallet.privateKey;
        } catch (_2) {
            throw new Error("Invalid private key");
        }
    }
    throw new Error("secret key validation not implemented for blockchain");
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__webpack_require__.$Refresh$.register(_c, "SettingsButton");
__webpack_require__.$Refresh$.register(_c1, "AvatarButton");
__webpack_require__.$Refresh$.register(_c2, "SettingsMenu");
__webpack_require__.$Refresh$.register(_c3, "AvatarHeader");
__webpack_require__.$Refresh$.register(_c4, "WalletLists");
__webpack_require__.$Refresh$.register(_c5, "WalletList");
__webpack_require__.$Refresh$.register(_c6, "ImportTypeBadge");
__webpack_require__.$Refresh$.register(_c7, "AddConnectWalletButton");
__webpack_require__.$Refresh$.register(_c8, "SettingsList");
__webpack_require__.$Refresh$.register(_c9, "ImportSecretKey");


var $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
var $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		var errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		var testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/common/Account/ImportAccounts.tsx":
/*!**********************************************************!*\
  !*** ./src/components/common/Account/ImportAccounts.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImportAccounts": function() { return /* binding */ ImportAccounts; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coral-xyz/common */ "../common/dist/esm/index.js");
/* harmony import */ var _coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coral-xyz/recoil */ "../recoil/src/index.ts");
/* harmony import */ var _coral_xyz_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coral-xyz/themes */ "../themes/src/index.tsx");
/* harmony import */ var _ledgerhq_hw_app_eth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ledgerhq/hw-app-eth */ "../../node_modules/@ledgerhq/hw-app-eth/lib-es/Eth.js");
/* harmony import */ var _ledgerhq_hw_app_solana__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ledgerhq/hw-app-solana */ "../../node_modules/@ledgerhq/hw-app-solana/lib-es/Solana.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/esm/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/esm/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/esm/List/List.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/esm/ListItemButton/ListItemButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/esm/ListItemText/ListItemText.js");
/* harmony import */ var _project_serum_anchor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @project-serum/anchor */ "./node_modules/@project-serum/anchor/dist/browser/index.js");
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @solana/web3.js */ "../../node_modules/@solana/web3.js/lib/index.browser.esm.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ethers */ "../../node_modules/ethers/lib.esm/utils.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ethers */ "../../node_modules/@ethersproject/bignumber/lib.esm/bignumber.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ethers */ "../../node_modules/@ethersproject/providers/lib.esm/index.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ethers */ "../../node_modules/@ethersproject/units/lib.esm/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common */ "./src/components/common/index.tsx");
/* harmony import */ var _Inputs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Inputs */ "./src/components/common/Inputs.tsx");
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "../../node_modules/process/browser.js");
/* provided dependency */ var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();












const { base58: bs58  } = ethers__WEBPACK_IMPORTED_MODULE_10__;
const LOAD_PUBKEY_AMOUNT = 20;
const DISPLAY_PUBKEY_AMOUNT = 5;
function ImportAccounts({ blockchain , mnemonic , transport , onNext , onError , allowMultiple =true  }) {
    _s();
    const background = (0,_coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_2__.useBackgroundClient)();
    const theme = (0,_coral_xyz_themes__WEBPACK_IMPORTED_MODULE_3__.useCustomTheme)();
    const [accounts, setAccounts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [selectedAccounts, setSelectedAccounts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [ledgerLocked, setLedgerLocked] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [importedPubkeys, setImportedPubkeys] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [derivationPath, setDerivationPath] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.DerivationPath.Default);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        (async ()=>{
            try {
                const blockchainKeyrings = await background.request({
                    method: _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.UI_RPC_METHOD_KEYRING_STORE_READ_ALL_PUBKEYS,
                    params: []
                });
                const keyring = blockchainKeyrings[blockchain];
                setImportedPubkeys(Object.values(keyring).flat().map((a)=>a.publicKey));
            } catch  {
            // Keyring store locked, either onboarding or left open
            }
        })();
    }, [
        background,
        blockchain
    ]);
    //
    // Load a list of accounts and their associated balances
    //
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!derivationPath) return;
        let loaderFn;
        if (mnemonic) {
            // Loading accounts from a mnemonic
            loaderFn = (derivationPath)=>loadMnemonicPublicKeys(mnemonic, derivationPath);
        } else if (transport) {
            // Loading accounts from a Ledger
            loaderFn = (derivationPath)=>loadLedgerPublicKeys(transport, derivationPath);
        } else {
            return;
        }
        loaderFn(derivationPath).then(async (publicKeys)=>{
            const balances = await loadBalances(publicKeys);
            setAccounts(balances.sort((a, b)=>b.balance.lt(a.balance) ? -1 : b.balance.eq(a.balance) ? 0 : 1));
        }).catch((error)=>{
            // Probably Ledger error, i.e. app is not opened
            console.error(error);
            if (onError) {
                // Call custom error handler if one was passed
                onError(error);
            } else {
                throw error;
            }
        });
    }, [
        mnemonic,
        transport,
        derivationPath
    ]);
    //
    // Clear accounts and selected acounts on change of derivation path.
    //
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setAccounts([]);
        setSelectedAccounts([]);
    }, [
        derivationPath
    ]);
    //
    // Load balances for accounts that have been loaded
    //
    const loadBalances = async (publicKeys)=>{
        if (blockchain === _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.Blockchain.SOLANA) {
            // TODO use Backpack configured value
            const solanaMainnetRpc = process.env.DEFAULT_SOLANA_CONNECTION_URL || _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_SOLANA_CLUSTER;
            const solanaConnection = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_7__.Connection(solanaMainnetRpc, "confirmed");
            const accounts = (await _project_serum_anchor__WEBPACK_IMPORTED_MODULE_6__.utils.rpc.getMultipleAccounts(solanaConnection, publicKeys.map((p)=>new _solana_web3_js__WEBPACK_IMPORTED_MODULE_7__.PublicKey(p)))).map((result, index)=>{
                return {
                    publicKey: publicKeys[index],
                    balance: result ? ethers__WEBPACK_IMPORTED_MODULE_11__.BigNumber.from(result.account.lamports) : ethers__WEBPACK_IMPORTED_MODULE_11__.BigNumber.from(0),
                    index
                };
            });
            return accounts;
        } else if (blockchain === _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.Blockchain.ETHEREUM) {
            // TODO use Backpack configured value
            const ethereumMainnetRpc = process.env.DEFAULT_ETHEREUM_CONNECTION_URL || _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.EthereumConnectionUrl.MAINNET;
            const ethereumProvider = new ethers__WEBPACK_IMPORTED_MODULE_12__.JsonRpcProvider(ethereumMainnetRpc);
            const balances = await Promise.all(publicKeys.map((p)=>ethereumProvider.getBalance(p)));
            return publicKeys.map((p, index)=>{
                return {
                    publicKey: p,
                    balance: balances[index],
                    index
                };
            });
        } else {
            throw new Error("invalid blockchain");
        }
    };
    //
    // Load accounts for the given mnemonic. This is passed to the ImportAccounts
    // component and called whenever the derivation path is changed with the selector.
    //
    const loadMnemonicPublicKeys = async (mnemonic, derivationPath)=>{
        return await background.request({
            method: _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.UI_RPC_METHOD_PREVIEW_PUBKEYS,
            params: [
                blockchain,
                mnemonic,
                derivationPath,
                LOAD_PUBKEY_AMOUNT
            ]
        });
    };
    //
    // Load accounts for a ledger.
    //
    const loadLedgerPublicKeys = async (transport, derivationPath)=>{
        const publicKeys = [];
        setLedgerLocked(true);
        const ledger = {
            [_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.Blockchain.SOLANA]: new _ledgerhq_hw_app_solana__WEBPACK_IMPORTED_MODULE_5__["default"](transport),
            [_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.Blockchain.ETHEREUM]: new _ledgerhq_hw_app_eth__WEBPACK_IMPORTED_MODULE_4__["default"](transport)
        }[blockchain];
        // Add remaining accounts
        for(let account = 0; account < LOAD_PUBKEY_AMOUNT; account += 1){
            const path = (0,_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.accountDerivationPath)(blockchain, derivationPath, account);
            publicKeys.push((await ledger.getAddress(path)).address);
        }
        setLedgerLocked(false);
        return publicKeys.map((p)=>blockchain === _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.Blockchain.SOLANA ? bs58.encode(p) : p.toString());
    };
    //
    // Handles checkbox clicks to select accounts to import.
    //
    const handleSelect = (index, publicKey)=>()=>{
            const currentIndex = selectedAccounts.findIndex((a)=>a.index === index);
            let newSelectedAccounts = [
                ...selectedAccounts
            ];
            if (currentIndex === -1) {
                // Adding the account
                if (allowMultiple) {
                    newSelectedAccounts.push({
                        index,
                        publicKey
                    });
                } else {
                    newSelectedAccounts = [
                        {
                            index,
                            publicKey
                        }
                    ];
                }
            } else {
                // Removing the account
                newSelectedAccounts.splice(currentIndex, 1);
            }
            // Sort by account indices
            newSelectedAccounts.sort((a, b)=>a.index - b.index);
            setSelectedAccounts(newSelectedAccounts);
        };
    const derivationPathOptions = {
        [_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.Blockchain.SOLANA]: [
            {
                path: _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.DerivationPath.Bip44,
                label: (0,_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.derivationPathPrefix)(_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.Blockchain.SOLANA, _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.DerivationPath.Bip44)
            },
            {
                path: _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.DerivationPath.Bip44Change,
                label: (0,_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.derivationPathPrefix)(_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.Blockchain.SOLANA, _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.DerivationPath.Bip44Change)
            }
        ]// Note: We only allow importing the deprecated sollet derivation path for
        //       hot wallets. This UI is hidden behind a local storage flag we
        //       expect people to manually set, since this derivation path was only
        //       used by mostly technical early Solana users.
        .concat(mnemonic && window.localStorage.getItem("sollet") ? [
            {
                path: _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.DerivationPath.SolletDeprecated,
                label: (0,_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.derivationPathPrefix)(_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.Blockchain.SOLANA, _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.DerivationPath.SolletDeprecated) + " (deprecated)"
            }
        ] : []),
        [_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.Blockchain.ETHEREUM]: [
            {
                path: _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.DerivationPath.Bip44,
                label: (0,_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.derivationPathPrefix)(_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.Blockchain.ETHEREUM, _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.DerivationPath.Bip44)
            },
            {
                path: _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.DerivationPath.Bip44Change,
                label: (0,_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.derivationPathPrefix)(_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.Blockchain.ETHEREUM, _coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.DerivationPath.Bip44Change)
            }
        ]
    }[blockchain];
    // Symbol for balance displays
    const symbol = {
        [_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.Blockchain.SOLANA]: "BANANA",
        [_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.Blockchain.ETHEREUM]: "ETH"
    }[blockchain];
    // Decimals for balance displays
    const decimals = {
        [_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.Blockchain.SOLANA]: 9,
        [_coral_xyz_common__WEBPACK_IMPORTED_MODULE_1__.Blockchain.ETHEREUM]: 18
    }[blockchain];
    return /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
        sx: {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between"
        },
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/common/Account/ImportAccounts.tsx",
            lineNumber: 322,
            columnNumber: 5
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/common/Account/ImportAccounts.tsx",
            lineNumber: 330,
            columnNumber: 7
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
        sx: {
            marginLeft: "24px",
            marginRight: "24px",
            marginTop: "24px"
        },
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/common/Account/ImportAccounts.tsx",
            lineNumber: 331,
            columnNumber: 9
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_common__WEBPACK_IMPORTED_MODULE_8__.Header, {
        text: `Import account${allowMultiple ? "s" : ""}`,
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/common/Account/ImportAccounts.tsx",
            lineNumber: 338,
            columnNumber: 11
        },
        __self: this
    }), /*#__PURE__*/ React.createElement(_common__WEBPACK_IMPORTED_MODULE_8__.SubtextParagraph, {
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/common/Account/ImportAccounts.tsx",
            lineNumber: 339,
            columnNumber: 11
        },
        __self: this
    }, "Select which account", allowMultiple ? "s" : "", " you'd like to import.")), /*#__PURE__*/ React.createElement("div", {
        style: {
            margin: "16px"
        },
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/common/Account/ImportAccounts.tsx",
            lineNumber: 343,
            columnNumber: 9
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_Inputs__WEBPACK_IMPORTED_MODULE_9__.TextInput, {
        placeholder: "Derivation Path",
        value: derivationPath,
        setValue: (e)=>setDerivationPath(e.target.value),
        select: true,
        disabled: ledgerLocked,
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/common/Account/ImportAccounts.tsx",
            lineNumber: 344,
            columnNumber: 11
        },
        __self: this
    }, derivationPathOptions.map((o, idx)=>/*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
            value: o.path,
            key: idx,
            __source: {
                fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/common/Account/ImportAccounts.tsx",
                lineNumber: 352,
                columnNumber: 15
            },
            __self: this
        }, o.label)))), accounts.length > 0 && /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
        sx: {
            color: theme.custom.colors.fontColor,
            background: theme.custom.colors.background,
            borderRadius: "12px",
            marginLeft: "16px",
            marginRight: "16px",
            paddingTop: "8px",
            paddingBottom: "8px"
        },
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/common/Account/ImportAccounts.tsx",
            lineNumber: 360,
            columnNumber: 13
        },
        __self: this
    }, accounts.slice(0, DISPLAY_PUBKEY_AMOUNT).map(({ publicKey , balance , index  })=>/*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
            key: publicKey.toString(),
            onClick: handleSelect(index, publicKey),
            sx: {
                display: "flex",
                paddinLeft: "16px",
                paddingRight: "16px",
                paddingTop: "5px",
                paddingBottom: "5px"
            },
            disableRipple: true,
            disabled: importedPubkeys.includes(publicKey.toString()),
            __source: {
                fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/common/Account/ImportAccounts.tsx",
                lineNumber: 374,
                columnNumber: 19
            },
            __self: this
        }, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
            style: {
                display: "flex",
                width: "100%"
            },
            __source: {
                fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/common/Account/ImportAccounts.tsx",
                lineNumber: 387,
                columnNumber: 21
            },
            __self: this
        }, /*#__PURE__*/ React.createElement("div", {
            style: {
                display: "flex",
                justifyContent: "center",
                flexDirection: "column"
            },
            __source: {
                fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/common/Account/ImportAccounts.tsx",
                lineNumber: 388,
                columnNumber: 23
            },
            __self: this
        }, /*#__PURE__*/ React.createElement(_common__WEBPACK_IMPORTED_MODULE_8__.Checkbox, {
            edge: "start",
            checked: selectedAccounts.some((a)=>a.index === index) || importedPubkeys.includes(publicKey.toString()),
            tabIndex: -1,
            disabled: importedPubkeys.includes(publicKey.toString()),
            disableRipple: true,
            style: {
                marginLeft: 0
            },
            __source: {
                fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/common/Account/ImportAccounts.tsx",
                lineNumber: 395,
                columnNumber: 25
            },
            __self: this
        })), /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
            id: publicKey.toString(),
            primary: (0,_common__WEBPACK_IMPORTED_MODULE_8__.walletAddressDisplay)(publicKey),
            sx: {
                marginLeft: "8px",
                fontSize: "14px",
                lineHeight: "32px",
                fontWeight: 500
            },
            __source: {
                fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/common/Account/ImportAccounts.tsx",
                lineNumber: 409,
                columnNumber: 23
            },
            __self: this
        }), /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
            sx: {
                color: theme.custom.colors.secondary,
                textAlign: "right"
            },
            primary: `${balance ? (+ethers__WEBPACK_IMPORTED_MODULE_18__.formatUnits(balance, decimals)).toFixed(4) : 0} ${symbol}`,
            __source: {
                fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/common/Account/ImportAccounts.tsx",
                lineNumber: 419,
                columnNumber: 23
            },
            __self: this
        }))))))), accounts.length === 0 && /*#__PURE__*/ React.createElement(_common__WEBPACK_IMPORTED_MODULE_8__.Loading, {
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/common/Account/ImportAccounts.tsx",
            lineNumber: 440,
            columnNumber: 33
        },
        __self: this
    }), /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
        sx: {
            mt: "12px",
            ml: "16px",
            mr: "16px",
            mb: "16px"
        },
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/common/Account/ImportAccounts.tsx",
            lineNumber: 441,
            columnNumber: 7
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_common__WEBPACK_IMPORTED_MODULE_8__.PrimaryButton, {
        label: `Import Account${allowMultiple ? "s" : ""}`,
        onClick: ()=>onNext(selectedAccounts, derivationPath, mnemonic),
        disabled: selectedAccounts.length === 0,
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/common/Account/ImportAccounts.tsx",
            lineNumber: 449,
            columnNumber: 9
        },
        __self: this
    })));
}
_s(ImportAccounts, "BUTx5Atr7xx5vmI7T4GyUEt9TtE=", false, function() {
    return [
        _coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_2__.useBackgroundClient,
        _coral_xyz_themes__WEBPACK_IMPORTED_MODULE_3__.useCustomTheme
    ];
});
_c = ImportAccounts;
var _c;
__webpack_require__.$Refresh$.register(_c, "ImportAccounts");


var $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
var $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		var errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		var testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "5b5194df79a97f340650"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.4467845fb531d4859bbd.hot-update.js.map