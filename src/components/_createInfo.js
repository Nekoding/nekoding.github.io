const createInfo = data => {
  const html =
    `
      <div class="col s12 m4"><img src="${data.crestUrl}" alt="${data.name}" style="margin: 0 auto; display: block"></div>
      <div class="col s12 m8" style="margin-bottom: 10px">
        <table class="highlight">
          <thead>
            <tr>
              <th colspan="3" class="center-align info">
                <h5>Informasi Umum</h5>
              </th>
            </tr>
          </thead>
    
          <tbody>
            <tr>
              <td><b>Nama Tim</b></td>
              <td> : </td>
              <td>${data.name}</td>
            </tr>
            <tr>
              <td><b>Asal Negara</b></td>
              <td> : </td>
              <td>${data.area.name}</td>
            </tr>
            <tr>
              <td><b>Tahun didirikan</b></td>
              <td> : </td>
              <td>${data.founded}</td>
            </tr>
            <tr>
              <td><b>Alamat Tim</b></td>
              <td> : </td>
              <td>${data.address}</td>
            </tr>
            <tr>
              <td><b>No Telp & Email</b></td>
              <td> : </td>
              <td>${data.phone} - ${data.email} </td>
            </tr>
            <tr>
              <td><b>Website</b></td>
              <td> : </td>
              <td>${data.website}</td>
            </tr>
            <tr>
              <td><b>Stadion</b></td>
              <td> : </td>
              <td>${data.venue}</td>
            </tr>
            <tr>
              <td><b>Warna Tim</b></td>
              <td> : </td>
              <td>${data.clubColors}</td>
            </tr>
          </tbody>
        </table>
      </div>
    `

  return html
}

export { createInfo }
