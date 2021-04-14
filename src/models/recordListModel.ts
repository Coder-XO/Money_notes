import clone from '@/lib/clone';

const localStorageKeyName = 'recordList';     //  本地数据库保存的名字
const recordListModel = {
    data: [] as RecordItem[],
    ceeate(record: RecordItem) {
        const record2: RecordItem = clone(record);
        record2.createdAt = new Date();
        this.data.push(record2);
    },
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
        return this.data;
    },
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    }
};

export default recordListModel;