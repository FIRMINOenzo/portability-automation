import { createReadStream } from 'fs';
import csv from 'csv-parser';

export abstract class Csv {
  public static parseWithDesiredColumns(
    filePath: string,
    desiredColumns: Array<string>
  ): Promise<string[][]> {
    return new Promise((resolve, reject) => {
      const results: string[][] = [];
      createReadStream(filePath)
        .pipe(
          csv({
            separator: ';',
            mapHeaders: ({ header }) =>
              desiredColumns.indexOf(header) == -1 ? null : header,
          })
        )
        .on('data', (data) => results.push(data))
        .on('end', () => {
          resolve(results);
        })
        .on('error', (error) => {
          reject(error);
        });
    });
  }
}
