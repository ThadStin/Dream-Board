import React, { Component } from 'react'
import ReactTable from 'react-table-6'
import api from '../api'

import styled from 'styled-components'

import 'react-table-6/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

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
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
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
