/* eslint-disable import/extensions */
import { Modal } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import regeneratorRuntime from 'regenerator-runtime';
import './script/component/modal-app.js';
import './script/component/navbar-app.js';
import main from './script/view/main.js';

document.addEventListener('DOMContentLoaded', main, regeneratorRuntime, $, Modal);
