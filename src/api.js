export const api = {
  autos: {
    list: async () => {
      return fetch(
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vTxCEllkA4L-xbng96qLwnzOv4_nawwoC5PzT-W3_Jbtg595A75nmJ9PuwBpDNCNuGxTrHqcqfVx5bu/pub?output=tsv'
      )
        .then((res) => res.text())
        .then((text) => {
          return text
            .split('\n')
            .slice(1)
            .map((line) => {
              const [
                id,
                marca,
                modelo,
                descripcion,
                precio,
                transmicion,
                combustible,
                km,
                año,
                imagenes,
                detalle,
              ] = line.split('\t');

              return {
                id: parseInt(id),
                marca,
                modelo,
                descripcion,
                precio,
                transmicion,
                combustible,
                km,
                año,
                imagenes,
                detalle,
              };
            });
        });
    },
  },
};
