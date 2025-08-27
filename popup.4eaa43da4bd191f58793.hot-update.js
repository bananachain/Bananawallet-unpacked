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

/***/ "./src/components/Unlocked/XnftPopovers/Sending.tsx":
/*!**********************************************************!*\
  !*** ./src/components/Unlocked/XnftPopovers/Sending.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sending": function() { return /* binding */ Sending; }
/* harmony export */ });
/* harmony import */ var _coral_xyz_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coral-xyz/common */ "../common/dist/esm/index.js");
/* harmony import */ var _coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coral-xyz/recoil */ "../recoil/src/index.ts");
/* harmony import */ var _coral_xyz_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coral-xyz/themes */ "../themes/src/index.tsx");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "../../node_modules/@mui/material/esm/Typography/Typography.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common */ "./src/components/common/index.tsx");
/* provided dependency */ var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();





function Sending({ blockchain , signature  }) {
    _s();
    const theme = (0,_coral_xyz_themes__WEBPACK_IMPORTED_MODULE_2__.useCustomTheme)();
    const explorer = (0,_coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_1__.useBlockchainExplorer)(blockchain);
    const connectionUrl = (0,_coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_1__.useBlockchainConnectionUrl)(blockchain);
    return /*#__PURE__*/ React.createElement("div", {
        style: {
            height: "264px",
            display: "flex",
            flexDirection: "column",
            // 🍌 Change background to black gradient for Sent confirmation modal
            background: "linear-gradient(135deg, #000000 0%, #1a1a1a 25%, #0d0d0d 50%, #1a1a1a 75%, #000000 100%)"
        },
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/XnftPopovers/Sending.tsx",
            lineNumber: 23,
            columnNumber: 2
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
        style: {
            textAlign: "center",
            color: theme.custom.colors.secondary,
            fontSize: "16px",
            fontWeight: 500,
            marginTop: "20px"
        },
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/XnftPopovers/Sending.tsx",
            lineNumber: 32,
            columnNumber: 7
        },
        __self: this
    }, "Sending"), /*#__PURE__*/ React.createElement("div", {
        style: {
            flex: 1,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column"
        },
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/XnftPopovers/Sending.tsx",
            lineNumber: 43,
            columnNumber: 7
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(_common__WEBPACK_IMPORTED_MODULE_3__.Loading, {
        size: 48,
        iconStyle: {
            color: theme.custom.colors.primaryButton,
            display: "flex",
            marginLeft: "auto",
            marginRight: "auto"
        },
        thickness: 6,
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/XnftPopovers/Sending.tsx",
            lineNumber: 51,
            columnNumber: 9
        },
        __self: this
    })), /*#__PURE__*/ React.createElement("div", {
        style: {
            marginBottom: "16px",
            marginLeft: "16px",
            marginRight: "16px"
        },
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/XnftPopovers/Sending.tsx",
            lineNumber: 62,
            columnNumber: 7
        },
        __self: this
    }, explorer && connectionUrl && /*#__PURE__*/ React.createElement(_common__WEBPACK_IMPORTED_MODULE_3__.SecondaryButton, {
        onClick: ()=>{
            window.open((0,_coral_xyz_common__WEBPACK_IMPORTED_MODULE_0__.explorerUrl)(explorer, signature, connectionUrl));
        },
        label: "View Explorer",
        __source: {
            fileName: "/home/bro556/backpack-wallet/packages/app-extension/src/components/Unlocked/XnftPopovers/Sending.tsx",
            lineNumber: 70,
            columnNumber: 11
        },
        __self: this
    })));
}
_s(Sending, "PgwqNp1zmkhn8nsglxwdO4EwDyw=", false, function() {
    return [
        _coral_xyz_themes__WEBPACK_IMPORTED_MODULE_2__.useCustomTheme,
        _coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_1__.useBlockchainExplorer,
        _coral_xyz_recoil__WEBPACK_IMPORTED_MODULE_1__.useBlockchainConnectionUrl
    ];
});
_c = Sending;
var _c;
__webpack_require__.$Refresh$.register(_c, "Sending");


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
/******/ 	__webpack_require__.h = function() { return "6fc9fc9e445d91122083"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.4eaa43da4bd191f58793.hot-update.js.map