import http from '../http-common';

class DataService {
  // Get all drones
  public getAll(page: number) {
    return http.get(`/drones?_page=${page}&_limit=20`);
  }
  // Get drone by ID
  public get(id: string) {
    return http.get(`/drones/${id}`);
  }
  // Get All drones with filter
  public getByFilter(id: string, name: string, status: string, fly: string, page: number) {
    let filters = '';
    if (id !== '') {
      filters = `id=${id}`;
    }
    if (name !== '') {
      filters += `&name=${name}`;
    }
    if (fly !== '') {
      const flyStatus = fly === '1' ? '_sort=fly&_order=asc' : '_sort=fly&_order=desc';
      filters += `&${flyStatus}`;
    }
    if (status !== '') {
      filters += `&status=${status}`;
    }
    return http.get(`/drones?${filters}&_page=${page}&limit=20`);
  }
}

export default new DataService();
