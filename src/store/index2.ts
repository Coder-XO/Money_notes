//     对于tagList  与 recordList 的所有操作在window下的封装
import recordListModel from '@/models/recordListModel';
import tagListModel from '@/models/tagListModel';

const store = {
    recordList: recordListModel.fetch(),
    tagList: tagListModel.fetch(),
    createRecord: (record: RecordItem) => recordListModel.create(record),
    createTag: (name: string) => {     // 创建标签
        const message = tagListModel.create(name);   //  返回成功或失败
        if (message === 'duplicated') {
            window.alert('标签名重复了');
        } else if (message === 'success') {
            window.alert('添加成功');
        }
    },
    removeTag: (id: string) => {
        return tagListModel.remove(id);    // 返回布尔值
    },
    updateTag: (id: string, name: string) => {
        return tagListModel.update(id, name);
    },
    findTag(id: string) {
        return this.tagList.filter(t => t.id === id)[0];
    }
};
export default store;