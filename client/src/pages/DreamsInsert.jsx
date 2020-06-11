import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class DreamsInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            type: '',
            name: '',
            pic: '',
            location: '',
            achieved: '',
        }
    }

    handleChangeInputType = async event => {
        const type = event.target.value
        this.setState({ type })
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }
/////////// PIC method needs work!!  ///////////////////
    handleChangeInputPic = async event => {
        const pic = event.target.validity.valid
            ? event.target.value
            : this.state.pic

        this.setState({ pic })
    }

    handleChangeInputLocation = async event => {
        const location = event.target.value
        this.setState({ location })
    }

    handleIncludeDream = async () => {
        const { type, name, pic, location, achieved } = this.state
        // const arrayTime = time.split('/')
        const payload = { type, name, pic, location, achieved } //rating, time: arrayTime

        await api.insertDream(payload).then(res => {
            window.alert(`Dream inserted successfully`)
            this.setState({
                type: '',
                name: '',
                pic: '',
                location: '',
                achieved: '',
            })
        })
    }

    handleChangeInputAchieved = async event => {
        const achieved = event.target.value
        this.setState({ achieved })
    }
    // handleChangeInputAchieved = async event => {
    //     const achieved = event.target.value
    //       ? event.target.value
    //       : this.state.achieved
    //     this.setState({ achieved })
    // }  ACHIEVED NEEDS LOTS OF WORK //////////////

    render() {
        const { type, name, pic, location, achieved } = this.state
        return (
            <Wrapper>
                <Title>Create Dream</Title>

                <Label>Type: </Label>
                <InputText
                    type="text"
                    value={type}
                    onChange={this.handleChangeInputType}
                />

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Label>Pic: </Label>
                <InputText
                    type="text"
                    // step="0.1"
                    // lang="en-US"
                    // min="0"
                    // max="10"
                    // pattern="[0-9]+([,\.][0-9]+)?"
                    value={pic}//<img src={this.props.pic} alt="dream pic"/>
                    onChange={this.handleChangeInputPic}
                />

                <Label>Location: </Label>
                <InputText
                    type="text"
                    value={location}
                    onChange={this.handleChangeInputLocation}
                />

                <Label>Achieved: </Label>
                <InputText
                    type="boolean"
                    value={achieved}
                    onChange={this.handleChangeInputAchieved}
                />

                <Button onClick={this.handleIncludeDream}>Add Dream</Button>
                <CancelButton href={'/dreams/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default DreamsInsert
