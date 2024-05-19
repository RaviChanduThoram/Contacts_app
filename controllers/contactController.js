//@desc Get all contacts
//@route GET /api/contacts
//@access public

const express = require('express');
const router = express.Router();


const getContacts = (req,res) => {
    res.status(200).json({message : "Get all contacts"})
}

//@desc Create New Contact
//@route POST /api/contacts
//@access public

const createContact =(req,res) => {
    res.status(200).json({message : "Create contacts"})
}

//@desc get  Contact
//@route GET /api/contacts/:id
//@access public
const getContact=(req,res) => {
    res.status(209).json({message : `update contact for ${req.params.id}`})
}

//@desc Update  Contact
//@route put /api/contacts/:id
//@access public
const updateContact=(req,res) => {
    res.status(200).json({message : `update contact for ${req.params.id}`})
}
//@desc Delete  Contact
//@route delete /api/contacts/:id
//@access public
const deleteContact=(req,res) => {
    res.status(200).json({message : `delete contact for ${req.params.id}`})
}

module.exports={
    getContact,
    getContacts,
    createContact,
    updateContact,
    deleteContact
}