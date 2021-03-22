import React, { Component } from 'react';

class TaskItem extends Component {

    onChangeStatus = (value) => {
        this.props.onChangeStatusItem(this.props.taskvalue.id);
        // console.log(123)
    }
    onDelete = () => {
        this.props.onDelete(this.props.taskvalue.id)
    };
    onUpdate = () => {
        this.props.onUpdate(this.props.taskvalue.id)
    }
    render() {
        var tasks = this.props.taskvalue;
        return (
            <>
                <tr>
                    <td>{this.props.index + 1}</td>
                    <td>{tasks.name}</td>
                    <td className="text-center" onClick={this.onChangeStatus}>
                        <span className={tasks.status === true ? 'label label-success' : 'label label-danger'}>{tasks.status === true ? 'Kích hoạt' : 'Ẩn'}
                            <i className="fas fa-exchange-alt mr-5"></i>
                        </span>

                    </td>
                    <td className="text-center">
                        <button type="button"
                            className="btn btn-warning"
                            onClick={this.onUpdate}
                        >
                            <span className="fa fa-pencil mr-5" />Sửa</button>&nbsp;
                <button type="button" className="btn btn-danger"
                            onClick={this.onDelete}
                        >
                            <span className="fa fa-trash mr-5" />Xóa
                            </button>
                    </td>
                </tr>
            </>
        );
    }
}

export default TaskItem;