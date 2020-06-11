import React, { Component } from 'react'
import ReactTable from 'react-table-6'
import api from '../api'

import styled from 'styled-components'

import 'react-table-6/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`
const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`
const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`
class UpdateDream extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/dreams/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class DeleteDream extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do you want to delete this dream permanently?`, //${this.props.id}
            )
        ) {
            api.deleteDreamById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}


class DreamsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dreams: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllDreams().then(dreams => {
            this.setState({
                dreams: dreams.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { dreams, isLoading } = this.state
        console.log('TCL: DreamsList -> render -> dreams', dreams)

        const columns = [
            // {
            //     Header: 'ID',
            //     accessor: '_id',
            //     filterable: true,
            // },
            {
                Header: 'Name',
                accessor: 'name',
                filterable: true,
            },
            {
                Header: 'Type',
                accessor: 'type',
                filterable: true,
            },
            {
                Header: 'Pic',
                accessor: 'pic',
                filterable: true,
                Cell: function(props) {
                  return (
                    <span>
                      <img src={`${props.pic}`} alt="dream pic" height="100px" width="100px" />
                    </span> // giving undefined as img src!!!
                  )
                }
            },
            {
                Header: 'Location',
                accessor: 'location',
                filterable: true,
            },
            {
                Header: 'Achieved',
                accessor: 'achieved',
                filterable: true,
                Cell: function(props) {
                  return (
                    <span>
                      <input type="checkbox" name="achieved" value="achieved"></input>
                      <label for="achieved">Achieved</label>
                    </span> // checkboxes there but not functioning!!!!
                  )
                }
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteDream id={props.original._id} />
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateDream id={props.original._id} />
                        </span>
                    )
                },
            },
            // {
            //     Header: 'Time',
            //     accessor: 'time',
            //     Cell: props => <span>{props.value.join(' / ')}</span>,
            // },
        ]

        let showTable = true
        if (!dreams.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={dreams}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default DreamsList
