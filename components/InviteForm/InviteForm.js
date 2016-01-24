import React, { Component, PropTypes } from 'react';
import Formsy from 'formsy-react';
import cx from 'classnames';
import './InviteForm.scss';

class InviteForm extends Component {

  constructor(props) {
    super(props);
    this.state = {canSubmit: false};
  }

  render() {
    const submitClasses = cx('submit',{disabled: !this.state.canSubmit});
    return (
      <section className='inviteForm'>
        <h1>Get your free perfumes</h1>
        <Formsy.Form onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton} className="form">
          <MyInput name="email" validations="isEmail" validationError="Please enter a valid email" placeholder="Add friends’ email addresses" required />
          <button className={submitClasses} type="submit" disabled={!this.state.canSubmit}>Send</button>
        </Formsy.Form>
        <p>
          The more your share the better your chances to get free perfumes
          <span className="shareLinks">
            <ShareLink type='fb' text='Share' />
            <ShareLink type='gm' text='Gmail' />
            <ShareLink type='link' text='Link Copied' />
          </span>
        </p>
      </section>
    );
  }

  submit = (data) => {
    alert(JSON.stringify(data, null, 4));
  };

  enableButton = () => {
    this.setState({ canSubmit: true });
  };

  disableButton = () => {
    this.setState({ canSubmit: false });
  }
}

class ShareLink extends Component {

  static propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  };

  render() {
    const classNames = cx('shareLink', `btn-${this.props.type}`);
    return (
      <a className={classNames}>{this.props.text}</a>
    )
  }
}

const MyInput = React.createClass({
  mixins: [Formsy.Mixin],
  changeValue(event) {
    this.setValue(event.currentTarget['value']);
  },
  render() {
    const className = cx ('form-group', {
        'required': this.showRequired(),
        'error': !this.showRequired() && this.showError(),
        [`${this.props.className}`]: this.props.className
      });
    const errorMessage = this.getErrorMessage();
    return (
      <label className={className}>
        <input
          placeholder={this.props.placeholder || 'Input text'}
          type={this.props.type || 'text'}
          name={this.props.name}
          onChange={this.changeValue}
          value={this.getValue()}
          checked={this.props.type === 'checkbox' && this.getValue() ? 'checked' : null}
          />
        <span className='validation-error'>{errorMessage}</span>
      </label>
    );
  }
});

export default InviteForm;
