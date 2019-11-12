package com.dxc.pms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import com.dxc.pms.dao.MoviesDaoImpl;

import com.dxc.pms.model.Movies;

@Service
public class MovieServiceImpl implements MovieService {
	@Autowired
	MoviesDaoImpl dao;
	

	@Override
	public Movies getMovie(int movieId) {
		// TODO Auto-generated method stub
		System.out.println("My movie is in getMovie");
		return dao.getMovie(movieId);
	}

	@Override
	public List<Movies> getAllMovies() {
		// TODO Auto-generated method stub
		return dao.getAllMovies();
	}

	@Override
	public boolean addMovie(Movies movie) {
		// TODO Auto-generated method stub
		
		return dao.addMovie(movie);
		
	}

	@Override
	public boolean deleteMovie(int movieId) {
		// TODO Auto-generated method stub
		System.out.println("Inside service via deleting");
		return dao.deleteMovie(movieId);
		
	}

	@Override
	public boolean updateMovie(Movies movie) {
		// TODO Auto-generated method stub
		
		return dao.updateMovie(movie);
	}



	@Override
	public List<Movies> searchMoviebyName(String productName) {
		// TODO Auto-generated method stub
		
		return dao.searchProductbyName(productName);
	}

	
	

}
