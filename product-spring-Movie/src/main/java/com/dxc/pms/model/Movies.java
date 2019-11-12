package com.dxc.pms.model;





import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document
public class Movies {
	@Id
	private int movieId;
	
	private String movieName;
	private int budget;
	private String directorName;
	
	
	public Movies() {
		super();
		this.movieId = 65;
		this.movieName = "d";
		this.budget = 4;
		this.directorName = "dddd";
	}
	public Movies(int movieId, String movieName, int budget, String directorName) {
		super();
		this.movieId = movieId;
		this.movieName = movieName;
		this.budget = budget;
		this.directorName = directorName;
	}
	public int getMovieId() {
		return movieId;
	}
	public void setMovieId(int movieId) {
		this.movieId = movieId;
	}
	public String getMovieName() {
		return movieName;
	}
	public void setMovieName(String movieName) {
		this.movieName = movieName;
	}
	public int getBudget() {
		return budget;
	}
	public void setBudget(int budget) {
		this.budget = budget;
	}
	public String getDirectorName() {
		return directorName;
	}
	public void setDirectorName(String directorName) {
		this.directorName = directorName;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + budget;
		result = prime * result + ((directorName == null) ? 0 : directorName.hashCode());
		result = prime * result + movieId;
		result = prime * result + ((movieName == null) ? 0 : movieName.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Movies other = (Movies) obj;
		if (budget != other.budget)
			return false;
		if (directorName == null) {
			if (other.directorName != null)
				return false;
		} else if (!directorName.equals(other.directorName))
			return false;
		if (movieId != other.movieId)
			return false;
		if (movieName == null) {
			if (other.movieName != null)
				return false;
		} else if (!movieName.equals(other.movieName))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Movies [movieId=" + movieId + ", movieName=" + movieName + ", budget=" + budget + ", directorName="
				+ directorName + "]";
	}
	

}
