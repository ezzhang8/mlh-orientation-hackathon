import React, { Component } from "react";
import * as Mapillary from "mapillary-js";

export default class MapillaryViewer extends Component {
    constructor(props) {
        super(props);
        this.containerRef = React.createRef();

    }

    componentDidMount() {
        this.viewer = new Mapillary.Viewer({
            accessToken: "MLY|5494923973921616|75ede84ae518fed4232a6e7eb7d53688",
            container: this.containerRef.current,
            imageId: this.props.imageId,
        });

        console.log(this.viewer.getImage())

        this.viewer.on("image", this.onImageChanged);

    }

    componentWillUnmount() {
        if (this.viewer) {
            this.viewer.off(Mapillary.Viewer.nodechanged, this.onNodeChanged);
            this.viewer.remove();
        }
    }

    onImageChanged = (event) => {
        if (this.props.onImageChanged) {
            this.props.onImageChanged(event);
        }
    }

    render() {
        return <div ref={this.containerRef} style={{ width: "100vw", height: "100vh" }} />;
    }
}