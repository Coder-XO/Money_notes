// 声明全局自定义TS类型   这样整个src都可以使用此类型
type RecordItem = {     // TS声明对象类型
    tags: string[],
    notes: string,
    type: string,
    amount: number,     //  数据类型
    createdAt: Date | undefined   // 类
}