// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract GuitarRegistry {

mapping(bytes32=>bool)
public registered;

event GuitarRegistered(
bytes32 hash
);

function register(
bytes32 hash
)
external
{
registered[
hash
]=true;

emit GuitarRegistered(
hash
);
}

function exists(
bytes32 hash
)
public
view
returns(bool)
{
return registered[
hash
];
}

}