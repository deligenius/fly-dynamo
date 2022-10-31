"use client"

import ReactJson from 'react-json-view'

Set.prototype.toJSON = function () {
  return [...this.values()];
};


export const JsonView = ({ item }: {item: object}) => {
 
  return <ReactJson src={item} />
}