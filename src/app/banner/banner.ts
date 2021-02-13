export interface  ContentData{
    
    BannerId:number;
    Created:string;
    LastUpdated:string;
    accordian:Accordins[];
}

export interface Accordins {
    CategoyId:number;
    CategoyHeading:string;
    CategoyText:string;
    ExtraSettings:string;
    IsMandatory:boolean;
    Localization:string;
    PluginList:PluginLists[];
}

export interface PluginLists{
    ComplianceTypeID:number;
    ComplianceType:string;
    BlockingEnabled:boolean;
    PluginDomain:string;
    cName:string;
    optOutExternalLink:string;

}
