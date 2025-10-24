declare class SdkFeedback {
    static instance: SdkFeedback;
    static get I(): SdkFeedback;
    getFeedbackKindList({ complete }: IMethodParams): Promise<void>;
    createFeedback(params: IReqCreateFeedback, { complete }: IMethodParams): Promise<void>;
    satisfactionEvaluation(params: IReqFeedbackEval, { complete }: IMethodParams): Promise<void>;
}

declare class SdkCommon {
    static get feedback(): SdkFeedback;
    constructor(initParams: ISdkInitParams);
    sendCaptcha(params: IsendCaptcha, callback: IMethodParams): Promise<void>;
    bindPhone(params: IBindPhone, callback: IMethodParams): Promise<void>;
    unBindPhone(params: IunBindPhone, callback: IMethodParams): Promise<void>;
    bindEmail(params: IBindEmail, callback: IMethodParams): Promise<void>;
    UnbindEmail(params: IunBindEmail, callback: IMethodParams): Promise<void>;
    deregister(params: any, callback: IMethodParams): Promise<void>;
    deregisterCancel(CPcallback: IMethodParams): Promise<void>;
    getInfo(CPcallback: IMethodParams): Promise<void>;
    updateInfo(params: any, callback: IMethodParams): Promise<void>;
    checkAppVersion(params: ICheckAppVersion, callback: IMethodParams): Promise<void>;
    checkVersion(params: ICheckVersion, callback: IMethodParams): Promise<void>;
    checkGameVersion(params: ICheckGameVersion, callback: IMethodParams): Promise<void>;
    checkActivityVersion(params: ICheckActivityVersion, callback: IMethodParams): Promise<void>;
    getFeedbackKindList(callback: IMethodParams): Promise<void>;
    createFeedback(params: IReqCreateFeedback, callback: IMethodParams): Promise<void>;
    satisfactionEvaluation(params: IReqFeedbackEval, callback: IMethodParams): Promise<void>;
}

declare function doRequest(options: any, urlIndex?: number, refreshNum?: number, enableHttpDNS?: boolean): Promise<any>;

declare class SdkWegame extends SdkCommon {
    private _ad;
    private _bannerAd;
    private _interstitialAd;
    private _hasAd;
    private locationInfomation;
    private reportLocationTimer;
    private refreshSession;
    private businessRuleDefaultRefreshTime;
    private businessRulesInfo;
    private businessRuleInvoking;
    private businessWindowsQueue;
    private trackPublicPropsFailCount;
    private funcs;
    /**
     * initConfig: SDK初始化配置
     * {
     *    [configKey]: 后端配置结构
     * }
     *
     * 例如：sdkconfig/init
     * {
     * "event_public_attr": {
            "public_attr": {
              "pay_over": ["property1", "scenes_id", "a"],
              "event2": ["property1", "property2"],
              "event3": ["property1", "property2"]
            },
            "refresh": 6000,
            "version": "string"
        }
     *
     * */
    private initConfig;
    private scheduleInitMap;
    private scheuleReportProps;
    requestInstance: typeof doRequest;
    subChannelId: any;
    private isPromoter;
    private game_id;
    private promoInfo;
    constructor(initParams: ISdkInitParams);
    getDevicecode(): any;
    handleTrackError(error_action: 'rxlog_error_pay' | 'rxlog_error_login' | 'rxlog_error_share' | 'rxlog_error_init', error: any, code?: any): any;
    private addFeedback;
    private getFeedbackList;
    private getFeedbackDetail;
    private collectProps;
    private getAnnouncement;
    private clearPromoterTimer;
    private startPromoterTimer;
    private getPromoDisplayKEY;
    private exchangePromoCDKEY;
    private publicSubchannelCheck;
    private getInitConfig;
    private getAttributionData;
    private checkNeedActivate;
    private getLoginQsAndGenerateStruct;
    private ActivePrefix;
    /**
     * 用于设置子渠道，通行证记录来源（分包）、子渠道参数
     */
    setSubChannelId(subChannelId: string): IResponse<unknown> | {
        code: number;
    };
    /**
     * 用于设置自定义返回错误 Msg
     */
    setErrorMsg(errMsg: any): void;
    /**
     * 清空返回错误 Msg
     */
    clearErrorMsg(): void;
    login(params: WegameLogin, callback: IMethodParams): Promise<any>;
    authorize(params: WegameLogin, callback: IMethodParams): Promise<any>;
    setScheuleReportProps(data: any): void;
    getShareData(params: IgetShareData, callback: IMethodParams, stopCallback?: boolean): Promise<any>;
    share(params: IgetShareData, callback: IMethodParams): Promise<void>;
    compensatePayOrder(params: any, callback: IMethodParams): Promise<void>;
    checkHasCompensatePayOrder(): {
        code: number;
        msg: string;
        data: null;
        check?: undefined;
    } | {
        code: number;
        msg: string;
        check: never;
        data?: undefined;
    };
    pay(params: Ipay, callback: IMethodParams): Promise<void>;
    _openCustomerServiceConversation({ complete }: Partial<IMethodParams>, { params, desc, func, title, image, reconfirm, sessionFrom }: ConversationParams, showMessageCard?: boolean): Promise<{}>;
    rewardedVideoAd(data: IRequestAdData, { complete }: IMethodParams): Promise<void>;
    bannerAd(data: IRequestBannerAd, { complete }: IMethodParams): Promise<void>;
    interstitialAd(data: IRequestInterstitialAd, { complete }: IMethodParams): Promise<void>;
    shareSchedulingInit(params: IReqShareScheduleInit, callback: IMethodParams): Promise<void>;
    getShareScheduling(params: {
        funcs?: string[];
    }): IResponse<unknown> | {
        code: number;
        data: any;
    };
    shareSchedulingReport(params: IReqShareScheduleReport, callback: IMethodParams): Promise<void>;
    refreshSessionFunc(): Promise<1 | -1>;
    infoSync(CPcallback: IMethodParams, info: any): Promise<void>;
    userInfoSilentSync(CPcallback: IMethodParams, info: any): Promise<void>;
    _userInfoSilentSync(callback: IMethodParams, info: any): Promise<void>;
    handleLoacation(): Promise<any>;
    authorizeLocation(callback?: Partial<IMethodParams>): Promise<any>;
    reportLocationHttpFun(params: IreportLoaction, callback?: Partial<IMethodParams>): Promise<any>;
    startReportLoaction(params: IreportLoaction, { complete }: IMethodParams): Promise<void>;
    stopReportLocation(): void;
    deleteReportLocation(params: IreqdeleteReportLocation, { complete }: IMethodParams): Promise<void>;
    getNearlyPeasonByRadius(params: IreqNearlyPeason, { complete }: IMethodParams): Promise<void>;
    track(callback: IMethodParams, params: trackParams): Promise<void>;
    getAllBusinessData(callback: IMethodParams): Promise<void>;
    getBusinessData(params: IReqBusinessData, callback: IMethodParams): Promise<void>;
    refreshBusinessData(callback?: IMethodParams, isRecord?: boolean): Promise<void>;
    private dispatchBusinessWindowsQueue;
    requestBusinessOrder(params: IReqBusinessOrder, callback: IMethodParams): Promise<void>;
    msgSecCheck(params: OmitMegSecCheck, callback: IMethodParams): Promise<void>;
    mediaCheckAsync(params: IReqMediaCheckAsync, callback: IMethodParams): Promise<void>;
    /**
     * 轮训获取公共属性
     *
     */
    private loopGetPublicProps;
    /**
     * 设置公共属性
     * 设置后CP无需每次上报都传，由SDK填入properties中。
     */
    setPublicProperties(params: {
        [key: string]: any;
    }): IResponse<unknown> | {
        code: number;
    };
    /**
     * 修改设置的公共数据。
     */
    updatePublicProperties(params: {
        [key: string]: any;
    }): IResponse<unknown> | {
        code: number;
    };
    /**
     * 删除公共属性
     */
    deletePublicProperties(params: string[]): IResponse<unknown> | {
        code: number;
    };
    getPublicProperties(): {
        code: number;
        data: any;
    };
    decryptionDate(params: {
        encrypted_data: string;
        iv: string;
    }, { complete }: IMethodParams): Promise<void>;
    getUserDeviceCode(): string | {
        code: number;
        data: any;
    };
}

export { SdkWegame as default };
