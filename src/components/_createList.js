const createList = (data, param = '') => {
  const html =
    `<ul class="collection">
        <li class="collection-item avatar">
            <img src="${data.crestUrl}" alt="" class="circle">
            <span class="title">${data.name}</span>
            <p>Address : ${data.address}</p>
            <p>Website : ${data.website}</p>
            <p>Venue : ${data.venue}</p>
            <a href="teams.html?id=${data.id}${param}">Details</a>
        </li>
    </ul>`

  return html
}

export { createList }
