import React, { Component } from 'react';

class TaskChange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            status: false
        }
    }
    onChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        if (name === "status") {
            value = event.target.value === "true" ? true : false;
        }
        this.setState({
            [name]: value
        })
    }
    onSubmitForm = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.onClear();
    }
    onClear = () => {
        this.setState({
            name: '',
            status: false
        })
    }
    componentDidMount = () => {
        if (this.props.taskEdit) {
            let { id, name, status } = this.props.taskEdit
            this.setState({
                id: id,
                name: name,
                status: status
            })
        }
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.taskEdit) {
            this.setState({
                id: nextProps.taskEdit.id,
                name: nextProps.taskEdit.name,
                status: nextProps.taskEdit.status
            })
        } else if (nextProps && nextProps.taskEdit == null) {
            this.setState({
                id: '',
                name: '',
                status: false
            })
        }
    }
    render() {
        var { id } = this.state;
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">{id === '' ? 'Thêm Công Việc' : 'Cập nhật công việc'}</h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.onSubmitForm}>
                            <div className="form-group">
                                <label>Tên :</label>
                                <input type="text" className="form-control"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.onChange}
                                />
                            </div>
                            <label>Trạng Thái :</label>
                            <select className="form-control" required="required"
                                name="status"
                                value={this.state.status}
                                onChange={this.onChange}
                            >
                                <option value={true}>Kích Hoạt</option>
                                <option value={false}>Ẩn</option>
                            </select>
                            <br />
                            <div className="text-center">
                                <button type="submit" className="btn btn-warning">Lưu</button>&nbsp;
                                <button type="button" className="btn btn-danger" onClick={this.props.reciveOpenTask}>Hủy Bỏ</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskChange;