import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Container, Button } from "semantic-ui-react";
import { fetchUserByEmail, signIn } from "../actions/userAction";

class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
    statusEmail: false,
    statusPassword: false
  };

  handleChange = e => {
    const { email, password } = this.state;
    this.setState({ [e.target.name]: e.target.value });
    email && this.setState({ statusEmail: false });
    password && this.setState({ statusPassword: false });
  };

  onSubmit = () => {
    const { email, password } = this.state;
    if (!email && !password) {
      this.setState({ statusEmail: true, statusPassword: true });
    } else if (!email) {
      this.setState({ statusEmail: true });
    } else if (!password) {
      this.setState({ statusPassword: true });
    }

    password &&
      email &&
      this.props.fetchUserByEmail(email).then(() => {
        const info = {
          email: email,
          password: password
        };
        this.props.signIn(info);
      });
  };

  render() {
    return (
      <Container
        style={{
          backgroundColor: "white",
          boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          width: "50%",
          borderRadius: "5px",
          height: "320px",
          padding: "30px 15px 30px 15px",
          marginTop: "250px"
        }}
      >
        <Form>
          <Form.Input
            label="Email"
            placeholder="Email"
            email="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            error={this.state.statusEmail}
          />
          <Form.Input
            label="Şifre"
            placeholder="Şifre"
            password="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            error={this.state.statusPassword}
          />
          <Button
            style={{ width: "100%", margin: "15px 50px 10px 0px" }}
            color="teal"
            type="submit"
            onClick={this.onSubmit}
          >
            Giriş Yap
          </Button>
          <Button
            style={{
              width: "100%",
              margin: "15px 50px 10px 0px"
            }}
            color="teal"
            type="submit"
          >
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/şifreyenileme"
            >
              Şifremi Unuttum
            </Link>
          </Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps, { fetchUserByEmail, signIn })(SignIn);
