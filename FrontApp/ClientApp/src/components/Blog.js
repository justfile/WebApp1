import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Counter';
import {Editor, EditorState} from 'draft-js';

// const Blog = props => (
//   <div>
//     <h1>Blog</h1>
//   </div>
// );

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
  }
  render() {
    return (
        <Editor editorState={this.state.editorState} onChange={this.onChange} />
    );
  }
}

export default connect()(Blog);